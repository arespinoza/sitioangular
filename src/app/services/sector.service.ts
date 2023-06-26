import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../models/sector';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  urlbase:string="http://localhost:3000/api";

  constructor(private _http:HttpClient) { }


  getSectores():Observable<any>{

    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this._http.get(this.urlbase + "/sector");

  }


  getSector(id:string):Observable<any>{

    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this._http.get(this.urlbase + "/sector/"+id);

  }
  
  createSector(sector:Sector):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(sector);
    return this._http.post(this.urlbase + "/sector", body, httpOption);
  }

  updateSector(sector:Sector):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams().append("idsector", sector._id)
    }
    let body = JSON.stringify(sector);
    return this._http.put(this.urlbase + "/sector/"+sector._id, body, httpOption);
  }


  addContacto(contacto:Contacto, idsector:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(contacto);
    return this._http.post(this.urlbase + "/sector/"+idsector+"/contacto", body, httpOption);
  }

  deleteContacto(contacto:Contacto, idsector:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    return this._http.delete(this.urlbase + "/sector/"+idsector+"/contacto/"+contacto._id, httpOption);
  }

}
