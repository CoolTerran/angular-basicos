import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  heroeBorrado: string = '';

  borrarHeroe() { //"borrar" heroe y guardar en variable
    this.heroeBorrado = this.heroes.shift() || '';    
  }
}