import { Component, OnInit } from '@angular/core';
import { Contacto } from "./entidades/contacto";
import { ContactosService } from "./servicios/contactos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listaContactos: Contacto[];

  contactoSeleccionado: Contacto;

  // añadimos propiedad contactosService inyectada
  constructor(private contactosService: ContactosService) {

  }

  ngOnInit() {
    this.listaContactos = this.contactosService.obtenerContactos();
  }

  mostrarDetalles(contacto: Contacto) {
    this.contactoSeleccionado = contacto;
  }

  navegarRuta(ruta: string) {
    window.open(ruta, '_blank');
  }
}
