import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, window } from 'rxjs/operators';
import { AuthService } from '../security/auth.service';
@Injectable()
export class httpHeaders implements HttpInterceptor {
  url: string;
  miUrl: any;
  domain: any;
  constructor(private _auth: AuthService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._auth.getToken();
    const office = this._auth.getOffice();
    const user = this._auth.getUser();

    // if (token && token != null && office && office != null && user && user != null) {
    if (token && token != null) {
      const headers = new HttpHeaders({
        "Authorization": token,
        'Office': office + '',
        'User': user,
      });
      request = request.clone({ headers });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}
