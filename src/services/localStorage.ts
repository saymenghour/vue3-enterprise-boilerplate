import { Locales } from '@/constants';
import { Authentication, System } from '@/constants';

export const getBearerToken = (): string => {
  return `Bearer ${getAccessToken()}`;
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem(Authentication.AccessToken);
};

export const setAccessToken = (accessToken: string): void => {
  localStorage.setItem(Authentication.AccessToken, accessToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(Authentication.RefreshToken);
};

export const setRefreshToken = (refreshToken: string): void => {
  localStorage.setItem(Authentication.RefreshToken, refreshToken);
};

export const getExpiryIn = (): string | null => {
  return localStorage.getItem(Authentication.ExpiryIn);
};

export const setExpiryIn = (expiryIn: string): void => {
  localStorage.setItem(Authentication.ExpiryIn, expiryIn);
};

export const getDeviceId = (): string | null => {
  return localStorage.getItem(Authentication.DeviceId);
};

export const setDeviceId = (deviceId: string) => {
  localStorage.setItem(Authentication.DeviceId, deviceId);
};

export const saveToken = (accessToken: string, refreshToken: string, expiryIn: string, deviceId: string = ''): void => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setExpiryIn(expiryIn);
  setDeviceId(deviceId);
};

export const destroySensitiveInfo = (): void => {
  localStorage.removeItem(Authentication.AccessToken);
  localStorage.removeItem(Authentication.RefreshToken);
  localStorage.removeItem(Authentication.ExpiryIn);
};

export const getLocale = (): string => {
  return localStorage.getItem(System.Locale) || Locales.EN;
};

export const setLocale = (locale: string): void => {
  localStorage.setItem(System.Locale, locale);
};
