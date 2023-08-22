import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { SpinnerService } from "../services/spinner/spinner.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    private apiRequests = 0;
    
    constructor(private loader:SpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if(this.apiRequests === 0){
            this.loader.show();
        }
        this.apiRequests++;

        return next.handle(req).pipe(finalize(()=> this.stopLoader()));
    }

    private stopLoader(){
        this.apiRequests--;
        if(this.apiRequests === 0){
            this.loader.hide();
        }
    }
}