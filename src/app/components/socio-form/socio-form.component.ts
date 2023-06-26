import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-socio-form',
  templateUrl: './socio-form.component.html',
  styleUrls: ['./socio-form.component.css']
})
export class SocioFormComponent implements OnInit {
  socio: Socio;
  accion:string="new"; //accion tendra los valores de new o update

  constructor(private activatedRoute:ActivatedRoute,
              private socioService:SocioService,
              private router:Router) {
    this.socio = new Socio();
    this.socio.activo = true;
  }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
    }else {
      this.accion = "update";
      this.cargarSocio(params['id']);
    }
  });
  }


  cargarSocio(id:string){
    this.socio = this.socioService.getSocio(id);
  }


  registrar(): void {

    this.socioService.addSocio(this.socio);
    this.router.navigate(["socio"])

  }

  modificarSocio(){
    alert("codigo pendiente de implementacion...")
  }
}
