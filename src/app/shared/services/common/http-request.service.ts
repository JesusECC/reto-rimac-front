import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parameter } from '@app/shared/models/common/parameter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private _http: HttpClient,
  ) { }

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
