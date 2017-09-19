import { Injectable } from '@angular/core';
import { Contacto } from "../entidades/contacto";

@Injectable()
export class ContactosService {

  obtenerContactos(): Contacto[] {
    return [
      Contacto.desdeJSON(
      {
        id: 1,
        nombre: 'Steve',
        apellidos: 'Jobs',
        email: 'steve.jobs@apple.com',
        telefono: '76345863264823',
        twitter: 'steve_jobs',
        facebook: 'steve_jobs'
      }),
      Contacto.desdeJSON(
        {
        id: 2,
        nombre: 'Bill',
        apellidos: 'Gates',
        email: 'bill.gates@microsoft.com',
        telefono: '594689438957893',
        twitter: 'billgates',
        facebook: 'billgates'
      }),
      Contacto.desdeJSON(
        {
        id: 3,
        nombre: 'Elon',
        apellidos: 'Musk',
        email: 'elon.musk@tesla.com',
        telefono: '23242342424342',
        twitter: 'elonmusk',
        facebook: 'elonmusk'
      })
    ];
  }

}
