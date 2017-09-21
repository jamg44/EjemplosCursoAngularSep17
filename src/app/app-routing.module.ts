import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisContactosComponent } from "./mis-contactos/mis-contactos.componenet";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { ContactosResolve } from "./servicios/contactos-resolve.service";

const rutas: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent,
    // antes de mostrar MisContactosComponent
    // carga la lista de contactos y se la deja
    // preparada al componente destino
    resolve: {
      contactos: ContactosResolve
    }
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  },
  {
    path: '**',
    redirectTo: 'mis-contactos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
