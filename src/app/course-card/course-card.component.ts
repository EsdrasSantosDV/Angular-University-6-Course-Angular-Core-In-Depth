import {
  AfterContentInit,
  AfterViewInit,
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
    providers:[CoursesService]

})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

  /*
    SELF DECORATOR, A INJECAO VAI USAR O SERVIÇO DO ESCOPO DELE E NÃO DO SISTEMA DE HIERARQUIA DO ANGUALAR
    //ONDE ELE HERDA DO PAI
     */

  /*
  SKIP SELF DECORATOR, A INJEÇÃO VAI IGNORAR O SERVIÇO DO ESCOPO DO COMPONENTE, E VAI INJETAR O DO COMPONENTE PAI
   */

    constructor(@Self() private courseS: CoursesService) {
      console.log(this.courseS);
    }

    ngOnInit() {

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
