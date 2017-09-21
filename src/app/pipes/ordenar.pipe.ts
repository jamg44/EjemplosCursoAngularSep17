import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Pipe({ name: 'ordenar' })
export class OrdenarPipe implements PipeTransform {

  // Con 'transform()' creamos un nuevo dato y lo retornamos
  // no alteramos el dato original
  transform(contactos: Contacto[], orden: string) {

    contactos.sort((contacto1, contacto2): number => {

      const nombreCompleto1 = `${contacto1.nombre} ${contacto1.apellidos}`;
      const nombreCompleto2 = `${contacto2.nombre} ${contacto2.apellidos}`;

      // si el 1 es mayor que el 2 devolvemos 1
      if (nombreCompleto1 > nombreCompleto2) {
        return orden === 'asc' ? 1 : -1;
      }

      // si el 2 es mayor que el 1 devolvemos -1
      if (nombreCompleto1 < nombreCompleto2) {
        return orden === 'asc' ? -1 : 1;
      }

      // si son iguales devolvemos 0
      return 0;
    });


    return contactos;

  }
}
