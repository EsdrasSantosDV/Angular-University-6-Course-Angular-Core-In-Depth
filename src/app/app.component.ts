import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  InjectionToken,
  OnInit, Optional,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {logging} from 'protractor';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CoursesService]
  // USANDO O PROVEDOR DE THREE SHAKEL NÃO PRECISAMOS COLOCAR AQUI O PROVIDER
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;
/*
Portanto, o decorador opcional destina-se a situações em que não temos certeza se uma dependência será ser fornecido.
Dessa forma, podemos marcar a dependência como opcional e então temos que tratar programaticamente os casos
onde a dependência é indefinida.Em nosso código.
 */

  constructor(@Optional() private courseS: CoursesService, @Inject(CONFIG_TOKEN)private config: AppConfig) {
    console.log(this.config.apiUrl);
  }


  // Melhor lugar pra colocar a logica de inicializaççao, trigering e a chamadas do backend
  ngOnInit() {

    this.courses$ = this.courseS.loadCourses();

  }

  save(course: Course) {
    this.courseS.saveCourse(course).subscribe(() => console.log('SaveCourse'));
  }

}
