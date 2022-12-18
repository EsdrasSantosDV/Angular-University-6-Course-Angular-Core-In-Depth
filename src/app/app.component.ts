import {Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course = COURSES;


  price = 9.99;

  rate = 0.34;

  // E UM MECANISMO DE QUERY TEMPLATES DO ANGULAR
  // NOS CONSEGUIMOS QUALQUER REFERENCIA DE QUALQUER ELEMENTO DO NOSSO TEMPLATE
  // SO QUE ELE RETORNA A PRIMEIRA REFERENCIA
  // NO TESTE
  // SADSA

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  title = COURSES[0].description;

  // PIPE  E UM MECANISMO QUE TRASFORMAS DADOS EM UMA FORMA DE VISUALIZACAO PARA O USUARIO
  startDate = new Date(2000, 0, 1);

  constructor() {

  }

  courseSelected($event: Course) {

    console.log(this.card);
    console.log($event);
  }
}
