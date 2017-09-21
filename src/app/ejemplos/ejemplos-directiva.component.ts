import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-directivas',
  template: `
    <!-- Ejemplo de Directiva de Atributo -->
    <p (EjemploDirectivaAtributo)="algo()">Buenos dias</p>

    <!-- Ejemplo de Directiva Estructural -->
    <div *EjemploDirectivaEstructural="3000">
      <h2>Salgo tras 3 segundos!</h2>
    </div>
  `
})

export class EjemplosDirectivasComponent {
  algo() {
    console.log('algo');
  }
}
