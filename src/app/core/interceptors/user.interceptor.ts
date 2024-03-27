import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs';

import { environment as env } from '../../../environments/environment';

export const userInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return authService.isAuthenticated$.pipe(switchMap(isAuth => {
    if (isAuth === false) return next(req);

    return authService.getAccessTokenSilently({ authorizationParams: { audience: env.config.audience } }).pipe(switchMap(token => {
      if (!token) return next(req);
  
      const header: HttpRequest<unknown> = req.clone({
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      });
  
      return next(header);
    }));
  }))
  
}