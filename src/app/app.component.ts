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





// FUNCAO DE FABRICA QUE CRIA A DEPENDENCIA NO CONSTRUTOR
function courseServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

// PRECISAMOS DEFINIR UM TOKEN PRA INJECAO DO SERVIÇO
// E ESSE TOKEN E UNICO
// E O QUE REFERENCIA A DEPENDENCIA
const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

// Vou  agora resumir rapidamente tudo o que aprendi sobre a injeção de dependência
// sistema de injeção de depedencia é o que permite ao ANGULAR injetar as dependências aqui no construtor.
// Toda dependência possui internamente um token de injeção, que é como um identificador exclusivo para a dependência
// e uma função de fábrica de provedores que é chamada para criar dependência.
// Mesmo quando não escrevemos essas coisas nós mesmos, o Angular está aplicando alguns padrões e está fazendo exatamente
// isso debaixo dos panos
// Ele está criando um token de injeção implicitamente ou está criando uma função de provedor implicitamente.
// Nós apenas não estamos cientes disso diretamente.
// Mas é isso que está acontecendo debaixo dos panos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    // PRECISAMOS MANDAR UM OBJETO
    // DE CONFIGURAÇÃO PRO SISTEMA DE INJECAO
    // DO ANGULAR
    provide: COURSES_SERVICE,
    useFactory: courseServiceProvider,
    deps: [HttpClient]

  }]
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE) private courseS: CoursesService) {
    console.log(this.courseS);
  }


  // Melhor lugar pra colocar a logica de inicializaççao, trigering e a chamadas do backend
  ngOnInit() {

    this.courses$ = this.courseS.loadCourses();

  }

  save(course: Course) {
    this.courseS.saveCourse(course).subscribe(() => console.log('SaveCourse'));
  }

}
