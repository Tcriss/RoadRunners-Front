import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { SpinnerService } from "../services/spinner.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    
    constructor(private loader: SpinnerService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loader.show();
        return next.handle(req).pipe(
            finalize(()=> {
                this.loader.hide();
            })
        );
    }
}