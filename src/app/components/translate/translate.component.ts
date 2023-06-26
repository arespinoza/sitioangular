import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  source:string="";
  target:string="";
  text:string="";
  resultado!:any;

  constructor(private translateService: TranslateService) { 
      this.source="es";
      this.target="it";
      this.text="hola mundo !!!"
  }

  ngOnInit(): void {
  }

  obtenerLenguajes(){
    this.translateService.getLanguajes().subscribe(
      result=>{
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    );

    console.log("sigue con el codigo de aqui...");
  }


  traducirTexto(){


    this.translateService.translateText(this.source,this.target, this.text).subscribe(
      (result:any)=>{
        
        console.log(result.data.translations[0].translatedText);
        alert(result.data.translations[0].translatedText);
        this.resultado = result.data.translations[0].translatedText;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
