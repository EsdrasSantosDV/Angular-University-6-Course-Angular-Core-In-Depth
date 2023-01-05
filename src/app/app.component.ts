import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;


  constructor(private courseS: CoursesService, @Inject(CONFIG_TOKEN)private config: AppConfig) {
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
