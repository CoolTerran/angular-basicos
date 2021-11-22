import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
    
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

      get personajes(): Personaje[] { //queremos evitar acceso directo a Personajes que es privado
        return [...this._personajes]; //[] porque es arreglo y los ... "spread" separa cada elemento y crea uno nuevo
      }

    constructor() {}

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}