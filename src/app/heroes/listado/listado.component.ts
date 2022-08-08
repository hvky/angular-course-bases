import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Iron Man', 'Loki'];
  heroeBorrado: string = '';
  // borrado: boolean = false;

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    // this.borrado = (this.heroeBorrado.length == 0) ? false : true;  /* Forma opcinal */
  }
}
