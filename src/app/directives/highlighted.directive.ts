import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  // CIRAMOS UMA INSTANCIA DESSA DIRETIVA ONDE COLOCAMOS LA NO DOOM
  selector: '[highlighted]'
})
export class HighlightedDirective {

  // DIRETIVA PODE RECEBER INPUTS PROPERTIES

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();


  constructor() {
  }

//   HOST BINDING DECORATOR E PRA MODIFICAR AS DOOM PROPERTIES DO ELEMENTO ONDE A DIRETIVA E APLICADA
  // AQUI ESTRAMOS MODIFICANDO A DOOM PROPERTIES CLASSNAME
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }


  // DOM PROPERTIE E DIFERNETE DE ATRIBUTOS
  // PRA MODIFICAR UTILIZAMOS O HOST BINDING AINDA
  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return 'true';
  // }

  // AGORA PRA PEGAR DOM EVENTOS USAMOS O HOST LISTENER
  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }


}
