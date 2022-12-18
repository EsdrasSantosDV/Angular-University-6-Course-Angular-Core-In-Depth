import {Component, Output} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course = COURSES;


  price = 9.99;

  rate = 0.34;


  title = COURSES[0].description;

  // PIPE  E UM MECANISMO QUE TRASFORMAS DADOS EM UMA FORMA DE VISUALIZACAO PARA O USUARIO
  startDate = new Date(2000, 0, 1);

  constructor() {

  }

  courseSelected($event: Course) {
    console.log($event);
  }
}
