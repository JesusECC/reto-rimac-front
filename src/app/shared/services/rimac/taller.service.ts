import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpRequestService } from '../common/http-request.service';
// import { Parameter } from '@app/shared/models/common/parameter';
import {Parameter } from '@app/shared/models/common/parameter';
@Injectable({
    providedIn: 'root'
})

export class TallerService {

    constructor(private _request: HttpRequestService) { }


    getListVehiculo(parametro: Parameter): Observable<any> {
        return this._request.http(parametro);
    }
}