import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { LoaderInterceptor } from './core/interceptors/spinner.interceptor';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from "../environments/environment";
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { TuiPromptModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    TuiAlertModule,
    TuiPromptModule,
    TuiDialogModule,
    AuthModule.forRoot({
      ...env.config,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${env.url}insert`,
            tokenOptions: {
              authorizationParams: {
                audience: env.config.audience,
              },
            },
          },
          {
            uri: `${env.url}update/*`,
            tokenOptions: {
              authorizationParams: {
                audience: env.config.audience,
              },
            },
          },
          {
            uri: `${env.url}delete/*`,
            tokenOptions: {
              authorizationParams: {
                audience: env.config.audience,
              },
            },
          },
          {
            uri: `${env.url}user/*`,
            tokenOptions: {
              authorizationParams: {
                audience: env.config.audience,
              },
            },
          },
        ]
      }
    }),
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
