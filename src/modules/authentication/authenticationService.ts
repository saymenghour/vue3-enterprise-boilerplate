import type {
  LoginForm,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse
} from './authenticationType';

import { AppRoute } from '@/constants/Route';
import router from '@/router';
import { fetchApi } from '@/services/api/FetchAPI';
import BaseService from '@/services/BaseService';
import {
  destroySensitiveInfo,
  getAccessToken,
  getDeviceId,
  getRefreshToken,
  saveToken
} from '@/services/LocalStorage';
import { AESUtils, RSAUtils } from '@/utils/crypto';

export const loginWithCredential = async ({ username, password }: LoginForm) => {
  const secretKey = AESUtils.generateRandomByteArray();
  const request: LoginRequest = {
    username: username.trim(),
    password: AESUtils.encryptWithKey(password.trim(), secretKey),
    grantType: 'password',
    clientId: process.env.CLIENT_ID ?? '',
    clientSecret: process.env.CLIENT_SECRET ?? '',
    encryptedAesKey: RSAUtils.encrypt(secretKey.toString(), process.env.PUBLIC_KEY ?? '')
  };

  const response = await BaseService.post<ResponseSuccess<LoginResponse>>(
    '/api/v1/oauth2/login',
    request
  );
  return response;
};

export const refreshToken = async (): Promise<void> => {
  try {
    if (getRefreshToken() && getDeviceId()) {
      const formValues: RefreshTokenRequest = {
        grantType: 'refresh_token',
        clientId: process.env.CLIENT_ID ?? '',
        clientSecret: process.env.CLIENT_SECRET ?? '',
        refreshToken: getRefreshToken() ?? ''
      };

      const configOption: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${getAccessToken()}`
        },
        body: JSON.stringify(formValues)
      };

      const res: ResponseSuccess<RefreshTokenResponse> = await fetchApi(
        '/api/v1/oauth2/refresh-token',
        configOption
      );
      const { accessToken, refreshToken, expiresAt, deviceId } = res.data;
      saveToken(accessToken, refreshToken, expiresAt, deviceId);
      // TODO: display dialog session expired
      return;
    }

    destroySensitiveInfo();
    router.push({ name: AppRoute.Login.name });
  } catch (error: any) {
    // TODO: display dialog session expired
    destroySensitiveInfo();
    router.push({ name: AppRoute.Login.name });
  }
};
