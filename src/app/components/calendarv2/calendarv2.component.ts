import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig} from './../../sso.config';
import { GooService } from 'src/app/services/goo.service';

@Component({
  selector: 'app-calendarv2',
  templateUrl: './calendarv2.component.html',
  styleUrls: ['./calendarv2.component.css']
})
export class Calendarv2Component implements OnInit {

  claims:any=null;
  calendarioGoogle:any=null;

  constructor(private oAuthService:OAuthService,
              private gooService: GooService) { 
  }

  ngOnInit(): void {
    this.configureSingleSignOne();

  }

  configureSingleSignOne(){
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.initCodeFlow();
    sessionStorage.setItem("googleToken", this.oAuthService.getAccessToken())!;

  }
  
  logout(){
    this.oAuthService.logOut(); 
  }

  verEventos(){
    idCalendario:String;
    let idCalendario = "c_q26mptnlohvd84qnt9q6u9cs0o";
    this.gooService.getEvents(idCalendario, this.oAuthService.getAccessToken()).subscribe(
      result=>{
        this.calendarioGoogle = result;
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }

  token(){
    console.log(this.gooService.getToken())
  }

}
