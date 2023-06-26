import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocioComponent } from './components/socio/socio.component';
import { SocioFormComponent } from './components/socio-form/socio-form.component';
import { CaracterEspecial } from './directivas/validacion.directive';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { TranslateComponent } from './components/translate/translate.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { ToastrModule } from 'ngx-toastr';
import { SectorComponent } from './components/sector/sector.component';
import { SectorFormComponent } from './components/sector-form/sector-form.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocioComponent,
    SocioFormComponent,
    CaracterEspecial,
    TranslateComponent,
    HoroscopoComponent,
    SectorComponent,
    SectorFormComponent,
    LoginComponent,
    CalendarComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot()


  ],
  providers: [LoginService,   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
