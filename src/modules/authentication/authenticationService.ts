import { AppRoute } from '@/constants';
import { axios } from '@/http/axios';
import router from '@/router';
import {
  destroySensitiveInfo,
  getAccessToken,
  getBearerToken,
  getDeviceId,
  getRefreshToken,
  saveToken
} from '@/services/localStorage';
import { AESCipher, RSACipher } from '@/utils/crypto';
import type {
  LoginForm,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse
} from './authenticationType';

export const loginWithCredential = async ({ username, password }: LoginForm) => {
  try {

    const secretKey = AESCipher.generateRandomString();
    const data: LoginRequest = {
      username: username.trim(),
      password: AESCipher.encryptWithKey(password.trim(), secretKey),
      grantType: 'password',
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? '',
      encryptedAesKey: RSACipher.encrypt(secretKey, process.env.PUBLIC_KEY ?? '')
    };

    const res = await axios.post<SuccessResponse<LoginResponse>>('/api/v1/oauth2/login', data, {
      headers: {
        'Device-Id': getDeviceId()
      }
    });
    const { accessToken, refreshToken, expiresAt, deviceId } = res.data?.data ?? {};
    saveToken(accessToken, refreshToken, expiresAt, deviceId);
    return res.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
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

      const res = await axios.post<SuccessResponse<RefreshTokenResponse>>(
        '/api/v1/oauth2/refresh-token',
        data,
        {
          headers: {
            'Device-Id': getDeviceId()
          }
        }
      );
      const { accessToken, refreshToken, expiresAt, deviceId } = res.data?.data ?? {};
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

export function logout() {
  axios.post(
    '/api/v1/oauth2/logout',
    {
      accessToken: getAccessToken()
    },
    {
      headers: {
        'Device-Id': getDeviceId(),
        Authorization: getBearerToken()
      }
    }
  );
  destroySensitiveInfo();
  router.push({ name: AppRoute.Login.name });
}
