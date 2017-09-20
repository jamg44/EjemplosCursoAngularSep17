import { Component } from '@angular/core';
import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component({
  selector: 'nuevo-contacto',
  templateUrl: 'nuevo-contacto.component.html'
})

export class NuevoContactoComponent {

  constructor(private contactosService: ContactosService) { }

  guardarContacto(contacto: Contacto) {
    this.contactosService.guardarContacto(contacto)
      .subscribe((contacto: Contacto) =>
        alert('Contacto cerado')
      );
  }
}
