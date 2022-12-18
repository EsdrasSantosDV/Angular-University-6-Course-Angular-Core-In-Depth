import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  course = COURSES;


  price = 9.99;

  rate = 0.34;


  // OBSERVAÇÃO O ESCOPO DO VIEW CHILD E SO PRO TEMPLATE DO COMPONENTE VIGENTE VIGENTE
  // SE VC TENTAR POR EXEMPLO
  // PEGAR A REFERENCIA
  @ViewChild('cardImage')
  courseImage: ElementRef;


  @ViewChild('cardRef1')
  card: CourseCardComponent;


  // PODEMOS PASSAR AS OPOCES EM FORMATO DE OBNJETO
  // PODEMOS COLOCAR O TIPO DE LEITURA DE REFERENCIA DA NOSSA QUERY DE TEMPLATES
  // POR DEFAULT VEM A DA INSTANCI A DO COMPONENTE
  // AQUI COLOCAMOS PRA LER A REFERENCIA DO ELEMENTO DE REFERENCIA
  @ViewChild('cardRef2', {read: ElementRef})
  card2: CourseCardComponent;

  // PODEMOS PEGAR  A REFREENCIA NATIVA E TAMBEM DO COMPONENTE SE QUISERMOS
  // ELEMENTREF E QUALQUER ELEMENTO DO DOOM NATIVO PODEMOS PEGAR O ELEMENTO DE REFERENCIA
  // DE QUALQUER ELEMENTO, ATE MESMO DOS COMPONENTES. COMO FIZ ALI EMCIMA
  @ViewChild('container')
  containerDiv: ElementRef;

  title = COURSES[0].description;

  // PIPE  E UM MECANISMO QUE TRASFORMAS DADOS EM UMA FORMA DE VISUALIZACAO PARA O USUARIO
  startDate = new Date(2000, 0, 1);

  // QUANDO AS VARIAVEIS DOS QUERY ELEMENTS TEMPLATES SÃO POPULADOS E QUAL E O MOMENTO
  constructor() {
  }


  courseSelected($event: Course) {
    console.log(this.card2);
  }

  // O UNICO MOMENTO E A AFTER VIEW INIT UM DOS CICLOS DE VIDA DO COMPONENTE
  ngAfterViewInit(): void {

    // VAI DARA UNDEFINED PQ O ESCOPO DESSA REFERENCIA E DE OUTRO COMPONENTE ENTÃO NÃO PEGA
    // NÃO PODEMOS INFLIGIR O A HIERARQUIA DA QUERY DO NOSSO COMPONENTE
    // O ESCOPO DO VIEW CHILD DECORATOR E SO DO COMPONENTE QUE ELE TA USANDO
    // ELE E UM LOCAL TEMPLATE QUERY REFERENCE
    console.log('REFERENCIA DA IMAGEM', this.courseImage);

    // AQUI E O PONTO QUE TEMOS O VALOR DAS REFERENCIAS

    // ISSO VAI DAR ERRO
    // PORUQE ESTAMOS TENTANDO MOSTRAR O DATA CONSTRUDIA PELA VIEW E ESTAMOS
    // O VLAOR CONSTRUIDO PELA VIEW
    // this.course[0].description = 'test';

  }
}
