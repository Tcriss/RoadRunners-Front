import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAuth0 } from "@auth0/auth0-angular";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from "@taiga-ui/core";
import { TuiPromptModule } from "@taiga-ui/kit";

import { routes } from "../../routes.config";
import { authOptions } from "./auth0.config";
import { loaderInterceptor } from "../interceptors/loader.interceptor";
import { userInterceptor } from "../interceptors/user.interceptor";
import { UpdatePageTitle } from "../utils/pageTitleStrategy";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes, 
            //withViewTransitions(),
            withComponentInputBinding(), 
            withInMemoryScrolling({ scrollPositionRestoration: "top"})
        ),
        provideAnimations(),
        provideAuth0(authOptions),
        provideHttpClient(withInterceptors([userInterceptor, loaderInterceptor])),
        importProvidersFrom(
            TuiRootModule,
            TuiAlertModule,
            TuiPromptModule,
            TuiDialogModule,
        ),
        { provide: TitleStrategy, useClass: UpdatePageTitle }
    ]
}