import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  constructor(private servicio:HoroscopoService,
    private toastr: ToastrService) { }

  signoElegido!:string;
  textoDelSignoMes!:string;
  textoDelSignoSemana!:string;

  ngOnInit(): void {
  }

  obtenerTextoHoroscopo(signo:string){

    this.toastr.success('Obteniendo Datos del signo', 'Titulo');

    //llamo por semana
    this.servicio.getTextHoroscopo(signo, "week" ).subscribe(
      result=>{
        console.log(result);
        this.signoElegido = signo;
        this.textoDelSignoSemana = result.horoscope;
        //this.textoDelSigno = result['text'];

        //llamo por mes
        this.servicio.getTextHoroscopo(signo, "month" ).subscribe(
          result=>{
            console.log(result);
            this.signoElegido = signo;
            this.textoDelSignoMes = result.horoscope;
            //this.textoDelSigno = result['text'];
          },
          error=>{
            console.log(error);
            this.toastr.error("Ha ocurrido un error en la peticion a la API")
          }
        );

      },
      error=>{

      }
    )
  }

}
