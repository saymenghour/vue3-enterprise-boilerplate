type CreateActionOptions = {
  signal: AbortSignal
}

type Callback<Request, Response> = (payload: Request | undefined, options: CreateActionOptions) => Promise<Response> | void;

export const createAsyncAction = (<Response = any, Request = any>(callbackFn: Callback<Request, Response>) => {
  let abortController: AbortController | null = null;

  const action = (payload?: Request) => {
    abortController = new AbortController();
    const signal = abortController.signal;

    return callbackFn(payload, { signal });
  };

  action.abort = (reason?: any) => {
    if (abortController) {
      abortController.abort(reason);
      abortController = null;
    }
  };

  return action as typeof action & { abort: () => void };
});