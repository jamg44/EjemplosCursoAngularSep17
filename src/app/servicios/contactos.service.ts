import { Injectable } from '@angular/core';
import { Contacto } from "../entidades/contacto";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactosService {

  constructor(private http: Http) { }

  obtenerContactos(): Observable<Array<Contacto>> {
    return this.http
      .get('http://localhost:3000/contactos')
      // convierto el resultado a array y luego a Contactos
      .map(res => { // este .map es el de los observables
        return res.json()
                // el .map de abajo es el de javascript
                .map(contacto => Contacto.desdeJSON(contacto));
      });
  }

  guardarContacto(contacto: Contacto): Observable<Contacto> {
    return this.http
      .post('http://localhost:3000/contactos', contacto)
      .map(res => Contacto.desdeJSON(res.json()));
      /*.subscribe(data => {
        console.log('data', data);
      });*/

    // generamos un nuevo id
    /*contacto.id = this.contactos.length + 1;

    // añadimos el contacto a la lista
    this.contactos.push(contacto);

    // retornamos el contacto creado
    return contacto;*/
  }

}
