import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSessionService } from '../security/user-session.service';
import { Parameter } from '@app/shared/models/common/parameter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private _http: HttpClient,
    private _userSessionService: UserSessionService) { }

  public http(parametro: Parameter): Observable<any> {
    parametro.url = environment.backendservicehost + parametro.url;
    return this.callHttpClient(parametro);
  }

  private callHttpClient(parametro: Parameter): Observable<any> {
    let rpta: Observable<any>;
    switch (parametro.request) {
      case 'GET':
        rpta = this._http.get(parametro.url, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'DELETE':
        rpta = this._http.delete(parametro.url, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'PUT':
        rpta = this._http.put(parametro.url, parametro.data, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'POST':
        rpta = this._http.post<any>(parametro.url, parametro.data, this.getHttpOptions(parametro.excludeLoader));
        break;
      // case 'FILE':
      //   rpta = this._http.get(parametro.url, this.getHttpOptionsFile());
      //   break;
      // case 'FILE_FORM_POST':
      //   rpta = this._http.post(parametro.url, parametro.data, this.getHttpOptionsFileForm(parametro.excludeLoader));
      //   break;
      //   case 'PHOTO':
      //   rpta = this._http.get(parametro.url, this.getHttpOptionPhoto(parametro.excludeLoader));
      //   break;
      // case 'FILE_EXCEL':
      //   rpta = this._http.get(parametro.url, this.getHttpOptionsFileExcel(parametro.excludeLoader));
      //   break;
      // case 'FILE_FORM_PUT':
      //   rpta = this._http.put(parametro.url, parametro.data, this.getHttpOptionsFileForm(parametro.excludeLoader));
      //   break;
    }
    return rpta;
  }

  getHttpOptions(excludeLoader: string): any {
    let cabeceras;

    if (+excludeLoader) {
      cabeceras = {
        'Content-Type': 'application/json',
        'excludeLoader': excludeLoader,
      }
    } else {
      cabeceras = {
        'Content-Type': 'application/json',
      }
    }
    return { headers: new HttpHeaders(cabeceras) }
  }

}
