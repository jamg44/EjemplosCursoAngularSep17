import { Component, Injectable, OnInit, OpaqueToken, Inject } from '@angular/core';

@Injectable()
export class Servicio1 {
  obtenerMensaje() {
    return 'Soy un servicio decorado con @Injectable';
  }
}

// Como no usamos @Injectable, le creamos un proveedor de clase
export class Servicio2 {
  obtenerMensaje() {
    return 'Soy un servicio que usa un proveedor de clase';
  }
}
export const Servicio2Provider = {
  provide: Servicio2,
  useClass: Servicio2
};

// proveedor de factoría
export class Servicio3 {
  constructor(private mensaje: string) { }
  obtenerMensaje() {
    return this.mensaje;
  }
}
export function Servicio3Factory() {
  // construimos el resultado
  return new Servicio3('Soy un servicio que usa un proveedor de factoria');
  // return { obtenerMensaje: () => 'aaa' };
}

// Ejemplo de proveedor de valor
export const MiValor: OpaqueToken = new OpaqueToken('MiValor');
export const MiValorProvider = {
  provide: MiValor,
  useValue: 'Soy un valor inyectado como dependencia'
};

// Componente que usa los servicios de arriba
@Component({
  selector: 'ejemplos-inyeccion',
  templateUrl: 'ejemplos-inyeccion.component.html'
})

export class EjemplosInyeccionComponent implements OnInit {

  mensaje1: string;
  mensaje2: string;
  mensaje3: string;
  mensaje4: string;

  constructor(
    private servicio1: Servicio1,
    private servicio2: Servicio2,
    private servicio3: Servicio3,
    @Inject(MiValor) private valor: string
  ) { }

  ngOnInit() {
    this.mensaje1 = this.servicio1.obtenerMensaje();
    this.mensaje2 = this.servicio2.obtenerMensaje();
    this.mensaje3 = this.servicio3.obtenerMensaje();
    this.mensaje4 = this.valor;
  }

}
