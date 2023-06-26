import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '951934830450-584dsihp59gb3g6f9eq95tofamtg4693.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private _http:HttpClient,
              private readonly oAuthService: OAuthService) { 


  }

  configureGoogleService(){
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.loadDiscoveryDocument().then( ()=>{
     this.oAuthService.tryLoginImplicitFlow().then( ()=>{
        if(!this.oAuthService.hasValidAccessToken()){
          console.log("tiene token INVALIDO")

          this.oAuthService.initLoginFlow()
        } else {
          console.log("tiene token VALIDO")

          //oAuthService.loadUserProfile().then( (userProfile)=>{
            //console.log(JSON.stringify(userProfile))
          //})
        }
      })
    })
  }

  getEvents(idCalendario: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer ya29.a0AWY7Ckle0pQi2AFqtSM9wDV6u4cc2ciHZZR8AgE-IkzQ_MnyQ0s6Ip4nvJaXuqkIDl0qpLDPO_uFBw9fuS0bwN0eSf_ghxEppfmGFoW3r1Qd4Ix_xkH0NhxGf8BZFkTga4n1I9ohe4nOsRpmrD-KWMrFf1QvaCgYKAb8SARISFQG1tDrpuVdmzbc1gM3SfGiV-fkIdw0163",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
      //.append("key", "AIzaSyBVDwmGSiRaIoHqpsl9KfnmhfY8Vd34F6w")
    };

    return this._http.get("https://www.googleapis.com/calendar/v3/calendars/"+idCalendario+"@group.calendar.google.com/events", httpOptions);

  }

  createEvent(idCalendario: string, event:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer ya29.a0AWY7CkmXU7ekkxXwBoNqxet32rSOJ_aqlnAQk51JMyw8lZSx1YqyQSvSRGuJW89oRYUCBkl_Ym92diNZPdkQs_nUVGR9wo3OcxS98SKWQThvREUKsg7TSkJQRLCt-VyQko2YXeli7mbfxKBoGbTdHurbUPZzaCgYKARkSARISFQG1tDrpjcH9x3DVzDh5MqR0Xgsc9g0163",
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




}
