import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TranslateService {
  constructor(private _http: HttpClient) { }

  public getLanguajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'b72911942bmshca63101a35b39a7p11b3c8jsn35dc9e48d110'
      }),
    }
    return this._http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
  }



  public translateText(source: string, target: string, text: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88',
      }),
    }
    const body = new HttpParams()
      .set('q', text)
        .set('target', target)
          .set('source', source);
  return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOptions);
  }
}