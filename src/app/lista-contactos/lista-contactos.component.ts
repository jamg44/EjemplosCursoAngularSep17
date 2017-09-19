import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contacto } from "../entidades/contacto";

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent {

  @Input() contactos: Contacto[];
  @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();

  notificarContactoSeleccionado(contacto: Contacto): void {
    this.seleccionado.emit(contacto);
  }
}
