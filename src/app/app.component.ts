import {Component, ElementRef, ViewChild} from '@angular/core';
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


  @ViewChild('cardRef1')
  card: CourseCardComponent;


  // PODEMOS PASSAR AS OPOCES EM FORMATO DE OBNJETO
  // PODEMOS COLOCAR O TIPO DE LEITURA DE REFERENCIA DA NOSSA QUERY DE TEMPLATES
  // POR DEFAULT VEM A DA INSTANCI A DO COMPONENTE
  // AQUI COLOCAMOS PRA LER A REFERENCIA DO ELEMENTO DE REFERENCIA
  @ViewChild('cardRef2', {read: ElementRef})
  card2: CourseCardComponent;

  //PODEMOS PEGAR  A REFREENCIA NATIVA E TAMBEM DO COMPONENTE SE QUISERMOS
  // ELEMENTREF E QUALQUER ELEMENTO DO DOOM NATIVO PODEMOS PEGAR O ELEMENTO DE REFERENCIA
  // DE QUALQUER ELEMENTO, ATE MESMO DOS COMPONENTES. COMO FIZ ALI EMCIMA
  @ViewChild('container')
  containerDiv: ElementRef;

  title = COURSES[0].description;

  // PIPE  E UM MECANISMO QUE TRASFORMAS DADOS EM UMA FORMA DE VISUALIZACAO PARA O USUARIO
  startDate = new Date(2000, 0, 1);

  constructor() {

  }

  courseSelected($event: Course) {
    console.log(this.card2);
  }
}
