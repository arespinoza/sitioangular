import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  urlbase:string="http://localhost:3000/api"
  constructor(private _http:HttpClient) { }


  getAgentes():Observable<any>{

    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this._http.get(this.urlbase + "/agente");

  }


}
