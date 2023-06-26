import { Agente } from "./agente";
import { Contacto } from "./contacto";

export class Sector {
    _id!: string;
    nombre!: string;
    funcion!: string;
    email!: string;
    responsable!: Agente;
    contactos!: Array<Contacto>;

    constructor(){
        this.contactos = new Array<Contacto>();
        this.responsable = new Agente();
    }

}
