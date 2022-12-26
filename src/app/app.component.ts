import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {logging} from 'protractor';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  courses$: Observable<Course[]>;

  constructor(private http: HttpClient, private courseS: CoursesService) {
    console.log(this.courseS);
  }


  // Melhor lugar pra colocar a logica de inicializaççao, trigering e a chamadas do backend
  ngOnInit() {

    const params = new HttpParams().set('page', '1').set('pageSize', '10');



    // QUANDO O ANGULAR INSTANCEIA O COMPONENTE, A PRIMEIRA COISA QUE CHAMA E O CONSTRUCTOR E PASSA AS DEPENDENCIAS MULTIPLAS
    this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  }



}
