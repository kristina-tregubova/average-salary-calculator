import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        request = request.clone({
            headers: httpHeaders,
            withCredentials: false
        });

        return next.handle(request);
    }
}