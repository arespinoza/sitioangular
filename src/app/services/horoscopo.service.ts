import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }


  getTextHoroscopo(sign:string,  alcance:string):Observable<any>{
    //solo fuciona con el idioma portuguez
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      }),
      params: new HttpParams()
        .append("day", alcance)
        .append("sunsign", sign)
    }

    return this._http.get("https://horoscope-astrology.p.rapidapi.com/horoscope", httpOption);
  }
}
