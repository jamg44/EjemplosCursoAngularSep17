import {
  Directive, ElementRef, Renderer, HostListener,
  Output, EventEmitter,
  TemplateRef, ViewContainerRef, Input
} from "@angular/core";

@Directive({ selector: '[EjemploDirectivaAtributo]' })
export class EjemploDirectivaAtributo {

  @Output() EjemploDirectivaAtributo: EventEmitter<any> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {}

  @HostListener('mouseenter')
  ponerEstilo() {
    this.cambiarEstilo(true);
    this.EjemploDirectivaAtributo.emit('asdas');
  }

  @HostListener('mouseleave')
  quitarEstilo() {
    this.cambiarEstilo(false);
  }

  cambiarEstilo(activo: boolean) {
    this.renderer.setElementStyle(
      // this.elementRef.nativeElement apunta al
      // elemento donde esté puesta la directiva
      this.elementRef.nativeElement,
      'font-weight', activo ? 'bold' : 'normal'
    );
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'background-color', activo ? 'blue' : 'white'
    );
  }
}

// Ejemplo de directiva Estructural
@Directive({ selector: '[EjemploDirectivaEstructural]' })
export class EjemploDirectivaEstructuralDirective {

  // ViewContainerRef es una ref al marco del DOM
  // TemplateRef es una ref al template contenido en el elemento
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef) { }

  // Recogemos el valor que se le pase a la directiva
  // y activamos el temporizador
  @Input('EjemploDirectivaEstructural')
  set tiempoEspera(milisegundos: number) {
    setTimeout(() => {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }, milisegundos);
  }

}

