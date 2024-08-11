export { };

declare global {

  type SuccessResponse<T = any> = {
    data: T;
    message?: string;
    success?: boolean;
    timestamp?: string;
  };

  type ErrorResponse = {
    error: string;
    errorCode: string;
    message: string;
    method: string;
    path: string;
    status: number;
    timestamp: string;
  };

}