import { Component, OnInit } from '@angular/core';
import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component({
  selector: 'mis-contactos',
  templateUrl: 'mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit {
  listaContactos: Contacto[];

    contactoSeleccionado: Contacto;

    // añadimos propiedad contactosService inyectada
    constructor(private contactosService: ContactosService) {}

    ngOnInit() {
      this.contactosService
        .obtenerContactos()
        .subscribe((contactos: Array<Contacto>) => this.listaContactos = contactos);
    }

    mostrarDetalles(contacto: Contacto) {
      this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string) {
      window.open(ruta, '_blank');
    }
  }
