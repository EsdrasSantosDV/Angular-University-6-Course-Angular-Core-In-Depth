import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
  // SE NÃO COLOCAMOS MANUALMENTE AQUI A INJEÇÃO DO COURSES SERVICES
  // ESSE COMPONENTE VAI TENTAR ACHAR UM PROVEDOR PRA DEPENDECIA DESSE SERVIÇO LA NO CONSTRUCTOR
  // SE ELE NÃO ENCONTRAR
  // ELE VAI PEDIR PRO COMPONENTE PAI DESSE COMPOENNTE AQUI
  // UM PROVEDOR QUE SATISFAÇA ESSA DEPEDENCIA
  // E SE FOR O CASO
  // ENTÃO O COMPONENTE PAI IRA DAR PRO SEU FILHO A DEPENDICA NECESSARIA
  // PÓR ISSO CHAMOS O SISTEMA DE DEPENCIA HIERARQUICO
  // E POR QUE SEGUE UMA HIERARAQUE DE INJECAO DE DEPENDENCIA DOS COMPONENTES
  // CASO O COMPONENTE NÃO POSSA CRIAR A DEPEDENCIA POR CONTA PROPRIA
  // ISSO VAI PERCORRER TODO O CAMINHO
  // ATE A RAIZ DO APP
  // ISSO SIGNIFICA QUE O SISTEMA DE INJECAO DE DEEPENCIA DO ANGULAR PERMITA
  // QUE CADA COMPONENTE CRIE SUAS PROPRIAS DEPENEDENCIAS SE FOR NECESSARIO
  // CASO O SERVICÇO QUE ESTAMOS USANDO UTILZIE UM ESTADO QUE SEJA PRIVADO PRA
  // DETERMINADA PARTE DO APP
  // PODEMOS PROVER ELE SO A NIVEL DO COMPONENTE
  // OU SE ELE PODE SER REUTILIZADO USAMOS OS TRES PROVEDORES DE SHAKAL

  // providers:[CoursesService]
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private courseS: CoursesService) {
      console.log(this.courseS);
    }

    ngOnInit() {

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
