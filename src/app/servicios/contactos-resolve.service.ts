import { Resolve, ActivatedRouteSnapshot }
  from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { Observable } from "rxjs/Observable";
import { ContactosService } from "./contactos.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactosResolve
  implements Resolve<Contacto[]> {

    constructor(private contactosService: ContactosService) {}

    // en resolve cargamos la lista de contactos
    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]> {
      return this.contactosService.obtenerContactos();

    }
  }
