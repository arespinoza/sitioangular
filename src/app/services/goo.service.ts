import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooService {

  constructor(private _http:HttpClient) { }


  getEvents(idCalendario: string, token:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
      //.append("key", "AIzaSyBVDwmGSiRaIoHqpsl9KfnmhfY8Vd34F6w")
    };

    console.log(httpOptions);
    return this._http.get("https://www.googleapis.com/calendar/v3/calendars/"+idCalendario+"@group.calendar.google.com/events", httpOptions);

  }

  createEvent(idCalendario: string, event:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.getToken(),
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
      //.append("key", "AIzaSyBVDwmGSiRaIoHqpsl9KfnmhfY8Vd34F6w")
    };

    let body = JSON.stringify(event);
    console.log(body);

    return this._http.post("https://www.googleapis.com/calendar/v3/calendars/"+idCalendario+"@group.calendar.google.com/events",body , httpOptions)
  }


  getToken():string{
    return sessionStorage.getItem("googleToken")!;

  }

}
