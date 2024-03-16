import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { BehaviorSubject, Observable, switchMap } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    isLogin = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService) { }

    private checkAuth(): void {
        this.authService.isAuthenticated$.subscribe(isAuth => this.isLogin.next(isAuth));
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.checkAuth();

        if (this.isLogin.value === false) return next.handle(req.clone());

        return this.authService.getAccessTokenSilently().pipe(switchMap(token => {
            const header: HttpRequest<unknown> = req.clone({
                headers: new HttpHeaders({ 'authorization': `Bearer ${token}` })
            });

            return next.handle(header);
        }));
    }
}