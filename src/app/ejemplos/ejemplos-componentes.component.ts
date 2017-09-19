import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ejemplos-componentes',
  templateUrl: 'ejemplos-componentes.component.html',
  styles: [`
    caja {
      margin: 10px;
    }
  `]
})
export class EjemplosComponentesComponent {
  eventoCaja($event) {
    console.log($event);
  }
}
