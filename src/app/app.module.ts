import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { LoaderInterceptor } from './core/interceptors/spinner.interceptor';
import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AuthModule } from '@auth0/auth0-angular';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule.forRoot({
      domain: 'dev-3f45fsqiwdpfl2ds.us.auth0.com',
      clientId: 'aphDtO4yTGzIEsmp9Wa37msp7cC2X5tX',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
