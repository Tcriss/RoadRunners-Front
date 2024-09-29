import type { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Location } from '@angular/common';

import { AlertsService } from '../../common/services/alerts.service';

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
    if(res) auth.loginWithRedirect();
    if(!res) location.back();
  });

  return false;
};
