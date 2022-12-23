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
  QueryList,
  TemplateRef
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;
  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input()
  noImageTpl: TemplateRef<any>;


  // Pra pegar das projeçoes enviadas
  // ESSE CONTENT CHILD O ESCOPO DELE E RESTRITO SO AS PARTES DE PROJEÇÃO DO TEMPLATE
  // DOS NG CONTENT


  // CHILDREN E PRA LISTAS BASICMAENTE PRA VC LEMBRAR, SE VC PRECISA PEGAR PARTE S DO CONTEU
  // JA SE VC QUER PROGRAMTICAS REFERENCIAS USE ESSE
  // JA O CONTENT CHILDREN ESTAMOS ACESSANDO A PARTE DO CONTEUDO DO COMPONENTE
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  courseImages: QueryList<ElementRef>;

  constructor() {


  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit(): void {
    console.log(this.courseImages);
  }

  oncourseViewed() {
    this.courseSelected.emit(this.course);
  }


  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses(course: Course) {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
    // PODE ENVIAR ASSIM MANDANDO UMA ARRYA
    // return {'beginner': this.course.category === 'BEGINNER'};
  }


}
