import { Injectable } from '@angular/core';
import { HttpRequestService } from '../common/http-request.service';
import { Observable, Subject } from 'rxjs';
import { Parameter } from '@app/shared/models/common/parameter';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _request: HttpRequestService) { }

  login(parametro: Parameter):Observable<any> {
    
    return this._request.http(parametro);
  }

  check(parametro: Parameter):Observable<any> {
    
    return this._request.http(parametro);
  }

  resetPassword(parametro: Parameter):Observable<any> {
    return this._request.http(parametro);
  }

}
