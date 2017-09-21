import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-pipe',
  templateUrl: 'ejemplos-pipe.component.html'
})

export class EjemplosPipeComponent  {

  fecha: Date = new Date();

  precio: number = 26.8;

  texto: string = 'Texto';

}
