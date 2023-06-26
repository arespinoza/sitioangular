import { Injectable } from '@angular/core';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  //el servicio va a hacer el crud de los socios
  socios: Array<Socio>;
  constructor() {
    this.socios = new Array<Socio>();
    this.socios = [
      {
        _id: '1',
        nombres: 'Raul Antonio',
        apellido: 'Zamora',
        activo: true,
        dni: 45666555,
        email: 'rzamora@gmail.com'
      },
      {
        _id: '2',
        nombres: 'Daniel Tomas',
        apellido: 'Gutierrez',
        activo: true,
        dni: 46852255,
        email: 'dgutierrez@gmail.com'
      },
      {
        _id: '3',
        nombres: 'Raquel Antonia',
        apellido: 'Palacios',
        activo: true,
        dni: 31558745,
        email: 'rpalacio@gmail.com'
      },
      {
        _id: '4',
        nombres: 'Marcelo Federico',
        apellido: 'Solis',
        activo: true,
        dni: 32555444,
        email: 'msolis@gmail.com'
      },
      {
        _id: '5',
        nombres: 'Daniel Hugo',
        apellido: 'Toconas',
        activo: true,
        dni: 32555444,
        email: 'msolis@gmail.com'
      }
    ]

  }

  getSocios(): Array<Socio> {
    return this.socios;
  }

  addSocio(socio: Socio) {
    socio._id = this.getIdDisponible();
    this.socios.push(socio);
  }

  getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.socios.length; i++) {
      if (maxid < Number(this.socios[i]._id)) {
        maxid = Number(this.socios[i]._id);
      }
    };
    return String((maxid + 1));
  }


  getSocio(id:string):Socio{
    let socio:Socio = new Socio();
    let indexSocio:number = this.socios.findIndex(s => (s._id == id));
    socio = this.socios[indexSocio];
    return socio;
  }

}
