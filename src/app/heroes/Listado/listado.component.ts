import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes:string []=['Spider-Man','Hulk','Thor','Iron-Man','Capitan-America'];
  // public arrayBorrado:string []=[];
  public heroeBorrado:string = '';

  public deleteHeroe():void{
    this.heroeBorrado = this.heroes.shift() || '';
    // this.arrayBorrado.push(heroeBorrado);
    console.log(this.heroeBorrado);
  }
  public addHeroe(){

  }
}
