import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AlertsService } from '../services/alerts.service';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const alerts = inject(AlertsService);
  const location = inject(Location);
  var authenticated: boolean = false;

  auth.isAuthenticated$.subscribe(res => authenticated = res);

  if(authenticated) return true;

  alerts.askMe(
    'Iniciar sesión', 
    'Necesitas iniciar sesión para acceder.', 
    'Iniciar sesión', 'Cancelar'
  ).subscribe(res => {
    if(res == true) {
      auth.loginWithRedirect();
      return false;
    }

    if(res == false) {
      location.back();
    }
    return;
  });
  return false;
};
