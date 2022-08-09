import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 9000,
    }
  ];

  get personaje(): Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje( personaje: Personaje ): void {
    this._personajes.push( personaje );
  }
}
