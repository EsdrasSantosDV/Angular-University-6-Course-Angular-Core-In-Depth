import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  InjectionToken,
  OnInit,
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
  styleUrls: ['./app.component.css']
  // USANDO O PROVEDOR DE THREE SHAKEL NÃO PRECISAMOS COLOCAR AQUI O PROVIDER
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor( private courseS: CoursesService, @Inject(CONFIG_TOKEN)private config: AppConfig) {
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
