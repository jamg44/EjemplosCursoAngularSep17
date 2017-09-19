import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'formulario-contacto',
  templateUrl: 'formulario-contacto.component.html',
  styleUrls: ['formulario-contacto.component.css']
})

export class FormularioContactoComponent {

  guardar(contactoRef: FormGroup) {
    console.log(contactoRef.value);
  }
}
