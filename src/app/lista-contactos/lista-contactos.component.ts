import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from "../entidades/contacto";

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent {

  @Input() contactos: Contacto[];

}
