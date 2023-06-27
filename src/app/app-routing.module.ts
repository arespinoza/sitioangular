import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocioComponent } from './components/socio/socio.component';
import { SocioFormComponent } from './components/socio-form/socio-form.component';
import { TranslateComponent } from './components/translate/translate.component';
import { SectorComponent } from './components/sector/sector.component';
import { SectorFormComponent } from './components/sector-form/sector-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { Calendarv2Component } from './components/calendarv2/calendarv2.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},

  {path:'socio', component:SocioComponent},
  {path:'socio-form/:id', component:SocioFormComponent},
  {path:'sector', component:SectorComponent},
  {path:'sector-form/:id', component:SectorFormComponent},
  {path:'traductor', component:TranslateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calendar', component: CalendarComponent},   
  {path: 'calendarv2', component: Calendarv2Component},   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
