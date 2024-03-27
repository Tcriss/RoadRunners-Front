import type { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { AlertsService } from '../../services/alerts.service';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const alerts = inject(AlertsService);
  const location = inject(Location);
  let isAuth: boolean = false;

  auth.isAuthenticated$.subscribe(res => isAuth = res);

  if (isAuth) return true;

  alerts.askMe(
    'Iniciar sesión', 
    'Necesitas iniciar sesión para acceder.', 
    'Iniciar sesión', 'Cancelar'
  ).subscribe(res => {
    if(res == true) auth.loginWithRedirect();
    if(res == false) location.back();

    return;
  });
  
  return false;
};
