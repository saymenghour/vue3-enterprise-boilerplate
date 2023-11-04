import { z } from "zod";
import { loginSchema } from "./loginSchema";

export type LoginForm = z.infer<typeof loginSchema>;

export type Authentication = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  deviceId: string;
};

export type LoginRequest = LoginForm & {
  grantType: "password";
  clientId: string;
  clientSecret: string;
  encryptedAesKey: string;
}

export type LoginResponse = Authentication & {
  userId: string;
};