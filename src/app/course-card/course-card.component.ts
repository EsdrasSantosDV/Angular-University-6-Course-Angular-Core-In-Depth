import {AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;
  @Output()
  courseSelected = new EventEmitter<Course>();


  // Pra pegar das projeçoes enviadas
  // ESSE CONTENT CHILD O ESCOPO DELE E RESTRITO SO AS PARTES DE PROJEÇÃO DO TEMPLATE
  // DOS NG CONTENT

  @ContentChild(CourseImageComponent, {read: ElementRef})
  courseImage: ElementRef;

  constructor() {


  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.courseImage);
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
