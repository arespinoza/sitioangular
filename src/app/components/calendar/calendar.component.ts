import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarioGoogle: any = {};
  constructor(private readonly googleService: GoogleService) { }

  ngOnInit(): void {
  }
  iniciarConfiguracion(){
    this.googleService.configureGoogleService();
  }
  verEventos(){
    idCalendario:String;
    let idCalendario = "c_q26mptnlohvd84qnt9q6u9cs0o";
    this.googleService.getEvents(idCalendario).subscribe(
      result=>{
        this.calendarioGoogle = result;
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }

  verToken(){
    console.log(this.googleService.getToken())
  }
}
