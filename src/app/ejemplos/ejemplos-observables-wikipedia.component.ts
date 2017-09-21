import { Component, OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { RequestOptions, URLSearchParams, Jsonp, Response } from "@angular/http";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'ejemplos-observables-wikipedia',
  templateUrl: 'ejemplos-observables-wikipedia.component.html'
})

export class EjemplosObservablesWikipedia implements OnDestroy {

  resultados: string[];

  private flujoDeDatosCajaTexto: Subject<string> = new Subject();

  private subscripcionCajaTexto: Subscription;

  constructor(private jsonp: Jsonp) {

    // nos guardamos la subscripcion
    // para poder desusbcribirnos
    this.subscripcionCajaTexto = this.flujoDeDatosCajaTexto
      // hace una pause previa a continuar el flujo
      .debounceTime(500)
      // evita repetir el último valor
      .distinctUntilChanged()
      // solo queremos el último evento ocurrido
      .switchMap((dato: string) => {
        console.log(dato);
        return this.peticionBusqueda(dato);
      }).subscribe((resultados: string[]) => {
        this.resultados = resultados;
      });


  }

  buscarEnWikipedia(evento) {
    this.flujoDeDatosCajaTexto.next(evento.target.value);
  }

  peticionBusqueda(termino: string): Observable<string[]> {
    const parametros: URLSearchParams = new URLSearchParams();
    parametros.set('search', termino);
    parametros.set('action', 'opensearch');
    parametros.set('format', 'json');
    parametros.set('callback', 'JSONP_CALLBACK');

    const options: RequestOptions = new RequestOptions();
    options.search = parametros;

    return this.jsonp.get('http://en.wikipedia.org/w/api.php', options)
      .map((respuesta: Response) => {
        return respuesta.json()[1]; // cogemos la posición 1 del array
      });

  }

  ngOnDestroy() {
    // nos desubscribimos
    this.subscripcionCajaTexto.unsubscribe();
  }
}
