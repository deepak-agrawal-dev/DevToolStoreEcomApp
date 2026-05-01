import { HttpInterceptorFn } from "@angular/common/http";

export const APIInterceptor: HttpInterceptorFn =
(req, next) => {
    /**
   * Clone request with headers.
   */
  const updateRequest = req.clone({
    setHeaders: {
        'Content-Type': 'application/json'
    }
  });

  console.log('API Request : ', updateRequest.url);

  return next(updateRequest);
}