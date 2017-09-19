import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from "./ejemplos/ejemplos-binding.component";
import { EjemplosComponentesComponent } from "./ejemplos/ejemplos-componentes.component";

@NgModule({
  declarations: [ // apuntamos todos los componentes, pipas y directivas
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent
  ],
  imports: [ // apuntamos modulos externos que uso
    BrowserModule,
    FormsModule // para usar formularios
  ],
  providers: [ // apuntamos dependencias para inyectar

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
