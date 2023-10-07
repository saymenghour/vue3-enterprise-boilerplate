export { };

declare global {

  type ResponseSuccess<T = any> = {
    data: T;
    message?: string;
    success?: boolean;
    timestamp?: string;
  };

  type ResponseError = {
    error: string;
    errorCode: string;
    message: string;
    method: string;
    path: string;
    status: number;
    timestamp: string;
  };

}