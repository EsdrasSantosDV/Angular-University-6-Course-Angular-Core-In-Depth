import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  course = COURSES;


  price = 9.99;

  rate = 0.34;


  title = COURSES[0].description;


  //PODEMOS SELECIONAR SOMENTE A DIRECTIVA QUE QUEREMOS
  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlighted: HighlightedDirective;


  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  startDate = new Date(2000, 0, 1);

  constructor() {
  }


  courseSelected($event: Course) {
  }

  // O UNICO MOMENTO QUE TEMOS POPULADO A NOSSAS REFERENCIAS E A AFTER VIEW INIT UM DOS CICLOS DE VIDA DO COMPONENTE
  ngAfterViewInit() {
    console.log(this.highlighted);

  }

  onCoursesEdited() {
    this.course.push({
      id: 1,
      description: 'Angular Core Deep Dive',
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      category: 'INTERMEDIATE',
      lessonsCount: 10
    });
  }

  OnToggle(isHighligted: boolean) {
    console.log(isHighligted);
  }
}
