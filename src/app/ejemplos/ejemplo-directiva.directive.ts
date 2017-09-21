import { Directive, ElementRef, Renderer, HostListener, Output, EventEmitter } from "@angular/core";

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
