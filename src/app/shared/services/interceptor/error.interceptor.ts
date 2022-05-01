import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../security/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router,
    private toastrService: ToastrService,
    private _authServ: AuthService,
    // private _modalService: NgbModal
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
            }
          },
          error => {
            if (error.status == 0) {
              this.toastrService.error('Error desconocido' + error.status, 'ERROR!');
            } else if (error.status == 304) {
              // this.toastrService.error('Petición Incorrecta' + error.status, 'ERROR 400');
            } else if (error.status == 400) {
              this.toastrService.error('Petición Incorrecta' + error.status, 'ERROR 400');
              // this._router.navigateByUrl('/error/400');
            } else if (error.status == 401) {
              this._authServ.SignOut();
              this.toastrService.warning('Se ha rechazado la autorización sus credenciales. ', 'ERROR 401');
              this._router.navigateByUrl('/login');
            } else if (error.status == 403) {
              this._router.navigateByUrl('/error/403');
            } else if (error.status == 404) {
              this._router.navigateByUrl('/error/404');
            } else if (error.status == 500) {
              this._router.navigateByUrl('/error/500');
            } else if (error.status == 503) {
              this._router.navigateByUrl('/error/503');
            } else if (error.status >= 900 && error.status < 1000) {
              this.toastrService.error('Error en servicio' + error.status, 'ERROR');
            } else {
              this.toastrService.error('Error en servicio' + error.status, 'ERROR');
            }
          })
      )
  }
}
