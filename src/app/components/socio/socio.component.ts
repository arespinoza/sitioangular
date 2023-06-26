import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  socios:Array<Socio>;

  constructor(private socioService:SocioService,
              private router:Router) { 

    this.socios = new Array<Socio>();
    this.cargarSocios();

  }

  ngOnInit(): void {
  }

  cargarSocios(){
    this.socios = this.socioService.getSocios();
  }


  agregarSocio(){
    console.log("entro en metodo ...")
    this.router.navigate(["socio-form", 0]);
  }

  modificarSocio(socio:Socio){
    this.router.navigate(["socio-form", socio._id]);

  }

  eliminarSocio(socio:Socio){

  }
}
