import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'ejemplos-observables',
  template: ''
})
export class EjemplosObservablesComponent {

  private miObservable$: Observable<any> =
    Observable.create((observador: Observer<any>) => {
      // Enviamos datos con next()
      observador.next('Buenas tardes');
      observador.next(6789);

      // emitimos un error
      //observador.error('ERROR FATAL');

      // tras un erro ya no puedo emitir mas
      //observador.next('tras error');

      observador.complete();
    });

  constructor() {
    this.miObservable$.subscribe(
      dato => {
        console.log('Dato enviado con next:', dato);
      },
      error => {
        console.log('Ocurrio error:', error);
      },
      () => {
        console.log('completado!');
      }
    )
  }
}
