import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisContactosComponent } from "./mis-contactos/mis-contactos.componenet";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";

const rutas: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
