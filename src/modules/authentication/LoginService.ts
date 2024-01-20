import BaseService from '@/services/BaseService';
import { AESUtils, RSAUtils } from '@/utils/crypto';
import type { LoginForm, LoginRequest, LoginResponse } from './loginType';

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
