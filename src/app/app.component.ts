import { Component } from '@angular/core';
import { Contacto } from "./entidades/contacto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contactos: Contacto[] = [
    {
      nombre: 'Steve Jobs',
      email: 'steve.jobs@apple.com',
      telefono: '76345863264823'
    },
    {
      nombre: 'Bill Gates',
      email: 'bill.gates@microsoft.com',
      telefono: '594689438957893'
    },
    {
      nombre: 'Elon Musk',
      email: 'elon.musk@tesla.com',
      telefono: '23242342424342'
    }
  ];

}
