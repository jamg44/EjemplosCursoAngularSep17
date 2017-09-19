import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
  selector: 'detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;
  @Output() verFacebook: EventEmitter<string> = new EventEmitter();
  @Output() verTwitter: EventEmitter<string> = new EventEmitter();

  notificarFacebook() {
    this.verFacebook.emit(this.contacto.generarRutaFacebook());
  }

  notificarTwitter() {
    this.verTwitter.emit(this.contacto.generarRutaTwitter());
  }

}
