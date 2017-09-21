import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-directivas',
  template: `
    <p (EjemploDirectivaAtributo)="algo()">Buenos dias</p>
  `
})

export class EjemplosDirectivasComponent {
  algo() {
    console.log('algo');
  }
}
