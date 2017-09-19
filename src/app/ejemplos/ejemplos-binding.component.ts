import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-binding',
  templateUrl: 'ejemplos-binding.component.html',
  styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})
export class EjemplosBindingComponent {
  nombre = 'Axa';

  textAreaLineas: number = 5;

  pintamosClase = true;

  claseTransparente = false;
  claseRojo = true;
  claseFlotante = false;

  mensaje: string = 'hola';

  constructor() {
    setTimeout(() => {
      // console.log('voy a cambiar', this);
      this.nombre = 'alumnos';
    }, 3000);
  }

  obtenerColor() {
    return 'green';
  }

  botonPulsado(evento) {
    console.log('se ha pulsado el boton', evento);
  }

}
