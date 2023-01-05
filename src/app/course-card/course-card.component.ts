import {
  AfterContentInit,
  AfterViewInit, Attribute,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList, Self, SkipSelf,
  ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    providers: [CoursesService]

})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();



    /*
    O decorador de atributos é realmente uma otimização de desempenho que impedirá que o Angular verificando o valor da propriedade type.
    A definição desse tipo de variável como um atributo deixa um pouco mais claro que essa propriedade aqui
    não se destina a ser alterado ao longo do tempo.
     */

    constructor(@Self() private courseS: CoursesService, @Attribute('type') private type: string) {
      console.log(this.courseS);
    }

    ngOnInit() {

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
