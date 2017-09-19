import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from "./ejemplos/ejemplos-binding.component";
import { EjemplosComponentesComponent } from "./ejemplos/ejemplos-componentes.component";
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from "./servicios/contactos.service";
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { Servicio1,
  EjemplosInyeccionComponent,
  Servicio2Provider,
  Servicio3Provider,
  MiValorProvider} from "./ejemplos/ejemplos-inyeccion.component";

@NgModule({
  declarations: [ // apuntamos todos los componentes, pipas y directivas
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent
  ],
  imports: [ // apuntamos modulos externos que uso
    BrowserModule,
    FormsModule // para usar formularios
  ],
  providers: [ // apuntamos dependencias para inyectar
    ContactosService,
    Servicio1, // decorado con injectable
    Servicio2Provider, // sin decorador, creado con proveedor de clase
    Servicio3Provider, // sin decorador, creado con proveedor de factoria
    MiValorProvider // proveedor de valor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
