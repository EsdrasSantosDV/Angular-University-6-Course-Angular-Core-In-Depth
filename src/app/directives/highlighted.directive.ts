import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';
import {CoursesService} from '../services/courses.service';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    //HOST ELE PEGA O SERVIÇO DO HOST DESSA DIRECTIVA, EXEMPOLO
  //SE O CARD COMPONENTE CHAMOU ESSA DIRETIVA ELE VAI EPGAR O SERVIÇO DO CARD COMPONENTE
  //E NÃO DA ARVORE DE HIERARQUIA DO SISTEMA
    constructor(@Host() private coursesS: CoursesService) {

        console.log('Directive created..');

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {

        console.log($event);

        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
