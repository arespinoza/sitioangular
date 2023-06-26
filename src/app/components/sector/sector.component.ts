import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from 'src/app/models/sector';
import { LoginService } from 'src/app/services/login.service';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  sectores!:Array<Sector>;

  constructor(private sectorService:SectorService,
              private router:Router,
              public loginService: LoginService) { 
    this.sectores = new Array<Sector>();
    this.cargarSectores()
  }

  

  ngOnInit(): void {
  }


  cargarSectores(){
    this.sectorService.getSectores().subscribe(
      result=>{
        let unSector = new Sector();
        result.forEach((element:any) => {
          Object.assign(unSector, element);
          this.sectores.push(unSector);
          unSector = new Sector();
        });
        console.log(this.sectores)
      },
      error=>{

      }
    )
  }


  agregarSector(){
    this.router.navigate(['sector-form', '0'])
  }

  modificarSector(sector:Sector){
    this.router.navigate(['sector-form', sector._id ])
  }
}
