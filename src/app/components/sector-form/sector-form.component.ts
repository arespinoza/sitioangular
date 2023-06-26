import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agente } from 'src/app/models/agente';
import { Contacto } from 'src/app/models/contacto';
import { Sector } from 'src/app/models/sector';
import { AgenteService } from 'src/app/services/agente.service';
import { LoginService } from 'src/app/services/login.service';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {

  accion:string=""
  sector!:Sector;
  agentes!: Array<Agente>;
  contacto!: Contacto;

  constructor(private activatedRoute: ActivatedRoute,
              private sectorService:SectorService,
              private agenteService:AgenteService,
              public loginService: LoginService) { 
    this.sector = new Sector();
    this.agentes= new Array<Agente>();
    this.contacto = new Contacto();
  }



  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
        this.accion = "new";
        this.cargarAgentes();
    }else {
      this.accion = "update";
      this.cargarAgentes();
      this.cargarSector(params['id']);
    }
  });
  }

  cargarAgentes(){
    this.agenteService.getAgentes().subscribe(
      result=>{
        let unAgente = new Agente();
        result.forEach((element:any) => {
          Object.assign(unAgente, element);
          this.agentes.push(unAgente);
          unAgente = new Agente();
        });
        console.log(this.agentes);
      },
      error=>{
        console.log(error)
      }
    )
  }




  cargarSector(id:string){
    this.sectorService.getSector(id).subscribe(
      result=>{
        Object.assign(this.sector, result)
        console.log(this.sector.responsable);
        this.sector.responsable = this.agentes.find((element) => (element._id == this.sector.responsable._id))!;
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarSector(){
    this.sectorService.createSector(this.sector).subscribe(
      (result:any)=>{
        if(result.status==1){
          alert(result.msg);
        }
      },
      error=>{
        alert("hubo un error en la transaccion");
        console.log(error)
      }
    )
  }

  actualizarSector(){
    this.sectorService.updateSector(this.sector).subscribe(
      (result:any)=>{
        if(result.status==1){
          alert(result.msg);
        }
      },
      error=>{
        console.log(error)
      }
    )
  }

  agregarContacto(){
    this.sectorService.addContacto(this.contacto, this.sector._id).subscribe(
      (result:any)=>{
        if(result.status==1){
          alert("Se agrego el contacto correctamente.")
        }
      },
      error=>{

      }
    )
  }

  eliminarContacto(contacto:Contacto){
    this.sectorService.deleteContacto(contacto, this.sector._id).subscribe(
      (result:any)=>{
        if(result.status==1){
          alert("Se elimino el contacto correctamente.")
        }
      },
      error=>{

      }
    )
  }
}
