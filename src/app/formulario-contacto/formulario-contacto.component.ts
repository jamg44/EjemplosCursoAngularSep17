import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Contacto } from "../entidades/contacto";

@Component({
  selector: 'formulario-contacto',
  templateUrl: 'formulario-contacto.component.html',
  styleUrls: ['formulario-contacto.component.css']
})

export class FormularioContactoComponent {

  @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

  notificarContacto(contactoRef: FormGroup) {
    this.formularioAceptado.emit(Contacto.desdeJSON(contactoRef.value));
  }
}
