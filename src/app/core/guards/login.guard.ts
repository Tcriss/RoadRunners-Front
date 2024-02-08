import type { CanActivateFn } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};
