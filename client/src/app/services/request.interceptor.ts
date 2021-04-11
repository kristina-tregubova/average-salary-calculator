import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private loader: LoaderService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loader.startLoading();

        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        request = request.clone({
            headers: httpHeaders,
            withCredentials: false
        });

        return next.handle(request).pipe(
            finalize(() => this.loader.stopLoading())
          );;
    }
}