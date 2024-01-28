import { axios } from '@/http/axios';
import router from '@/router';

import { AppRoute } from '@/constants';
import { AESUtils, RSAUtils } from '@/utils/crypto';
import { destroySensitiveInfo, getBearerToken, getDeviceId, getRefreshToken, saveToken } from '@/services/localStorage';
import type { LoginForm, LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from './authenticationType';

export const loginWithCredential = async ({ username, password }: LoginForm) => {
  const secretKey = AESUtils.generateRandomByteArray();
  const data: LoginRequest = {
    username: username.trim(),
    password: AESUtils.encryptWithKey(password.trim(), secretKey),
    grantType: 'password',
    clientId: process.env.CLIENT_ID ?? '',
    clientSecret: process.env.CLIENT_SECRET ?? '',
    encryptedAesKey: RSAUtils.encrypt(secretKey.toString(), process.env.PUBLIC_KEY ?? '')
  };

  const res = await axios.post<ResponseSuccess<LoginResponse>>('/api/v1/oauth2/login', data, {
    headers: {
      'Device-Id': getDeviceId()
    }
  });
  return res.data;
};

export const refreshToken = async (): Promise<string | undefined> => {
  try {
    if (getRefreshToken() && getDeviceId()) {
      const data: RefreshTokenRequest = {
        grantType: 'refresh_token',
        clientId: process.env.CLIENT_ID ?? '',
        clientSecret: process.env.CLIENT_SECRET ?? '',
        refreshToken: getRefreshToken() ?? ''
      };

      const res: ResponseSuccess<RefreshTokenResponse> = await axios.post('/api/v1/oauth2/refresh-token', data, {
        headers: {
          Authorization: getBearerToken()
        }
      });
      const { accessToken, refreshToken, expiresAt, deviceId } = res.data;
      saveToken(accessToken, refreshToken, expiresAt, deviceId);
      // TODO: display dialog session expired
      return 'Successfully';
    }

    destroySensitiveInfo();
    router.push({ name: AppRoute.Login.name });
  } catch (error: any) {
    // TODO: display dialog session expired
    destroySensitiveInfo();
    router.push({ name: AppRoute.Login.name });
  }
};
