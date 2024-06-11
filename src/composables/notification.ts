import { ElNotification } from "element-plus";

export function useNotification() {
  return {
    success: (message?: string, title?: string) => {
      ElNotification({
        type: 'success',
        title: title ?? 'Success',
        message: message ?? "Success",
      });
    },
    error: (message?: string, title?: string) => {
      ElNotification({
        type: 'error',
        title: title ?? 'Error',
        message: message ?? "Error",
      });
    }
  };
}