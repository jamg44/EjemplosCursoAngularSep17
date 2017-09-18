import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  eventoCaja($event) {
    console.log($event);
  }

}
