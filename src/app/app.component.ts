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

  constructor(private courseS: CoursesService) {
    console.log(this.courseS);
  }


  // Melhor lugar pra colocar a logica de inicializaççao, trigering e a chamadas do backend
  ngOnInit() {

    this.courses$ = this.courseS.loadCourses();

  }

  save(course: Course) {
    this.courseS.saveCourse(course).subscribe(()=>console.log("SaveCourse"));
  }

}
