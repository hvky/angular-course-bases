import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService ) { }

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return

    // this.onNewCharacter.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }
}
