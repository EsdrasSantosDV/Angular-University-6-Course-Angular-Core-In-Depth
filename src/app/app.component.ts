import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  /*
  On Push detecta as mudanças
  por meio das propriedades de entrada do componente ou por meio de fluxos observáveis  por meio do canal assíncrono.
   */

})
export class AppComponent implements OnInit, DoCheck {


  courses$: Observable<Course[]>;
  loaded = false;
  courses: Course[];

  constructor(private courseS: CoursesService, @Inject(CONFIG_TOKEN)private config: AppConfig, private cd: ChangeDetectorRef) {
    console.log(this.config.apiUrl);
  }

  /*
    Do Check é o melhor lugar para implementar alguma lógica de detecção de alteração personalizada.
   */
  ngDoCheck(): void {
    console.log('ngDoCheck');

    if (this.loaded) {
      this.cd.markForCheck();
      console.log('called cd.markForCheck()');
      this.loaded = undefined;

    }


  }
  // Melhor lugar pra colocar a logica de inicializaççao, trigering e a chamadas do backend
  ngOnInit() {

    this.courseS.loadCourses().subscribe(courses => {
      this.courses = courses;
      this.loaded = true;
    });
  }

  save(course: Course) {
    this.courseS.saveCourse(course).subscribe(() => console.log('SaveCourse'));
  }

}
