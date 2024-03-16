import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { AuthHttpInterceptor, provideAuth0 } from "@auth0/auth0-angular";
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from "./app.routes";
import { LoaderInterceptor } from "../interceptors/spinner.interceptor";
import { authOptions } from "./auth-module.config";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAuth0(authOptions),
        provideHttpClient(),
        provideAnimations(),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        },
    ]
}