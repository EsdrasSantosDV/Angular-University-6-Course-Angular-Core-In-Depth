import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

// ELE E COMPATIVEL COM O SISTEMA DE INJEÇÃO DE DEPENDENCIA ESSA CLASS E AQUI
@Injectable({
  // provedor de três shakal.
  // E O QUE FORNECE AO SISTEMA DE INJECÇAÕ DE DEPEENDICA DE ANGULAR
  // UMA FACTORY FUNCTION QUE FAZ COM QUE ESSA CLASSE AQUI
  // COURSES SERVICE SEJA REPASSADA PARA PARTES DA NOSSA APLICAÇÃO
  // O SISTEMA DE INJEÇÃO DE DEPEENDICA DO ANGULAR E QUE INSTANCIA UMA VEZ
  // ESSA CLASSE E VAI REAPSSANDO PROS CONSTRUTORES DE CADA COMPONENTE QUE A CHAMA
  providedIn: 'root'
  // PROVIDED IN E ONDE O SERVIÇO VAI SER INSTANCIADO, AQUI COLOCAMOS NA RAIZ DO APP
  // COMO O SISTEMA E HIERARQUICO ENTÃO VAI PRA TODA APLICAÇAO
  // mas Se fôssemos para todo o aplicativo e removêssemos todas as ocorrências la no construtoir de cada componente
  // nosso pacote de aplicativos não incluirá o código desse serviço
  // Essa é a grande vantagem de usar esses três provedores shaquill, Syntex, que estamos usando aqui
  // AQUI PODEMOS CRIAR A FACTORY FUNCTION E COLOCAR QUAIS DEPEDNECNIAS TERCEIRAS SERIAM USADAS
  // função de provedor manualmente.

  /*
  A questão aqui é quando devemos usar a sintaxe tradicional q
  quando comparada aqui à sintaxe usando propriedade do three shakel?

Bem, se nosso serviço não tiver nenhum estado e for um singleton de aplicação ampla, como, por
exemplo, o serviço de fetching data, devemos sempre usar a sintaxe de três provedores que vemos aqui.
Só devemos usar a sintaxe do provedor se nosso serviço tiver algum estado específico do componente
que queremos apenas ter visível no nível do componente para singletons em geral, então ze bunda
sempre prefira as três sintaxes porque resulta em pacotes de aplicativos menores e melhor tempo de execução.
   */


})
export class CoursesService {

  constructor(private http: HttpClient) {
    // SEMPRE VAMOS TER SEMPRE UMA INSTANCIA DE UM SERVIÇO
    // POR EXEMPLO
    // A CADA INSTANCIAMENTO DE UM COMPONENTE DO CURSO
    // ESTAMOS PROVENDO ESSE SERVIÇO PRA ELE
    // SO QUE UTILIZAMOS SEMPRE A MESMA INSTANCIA PRA TODOS
    console.log('CRIAÇÃO DO COURSES SERVICES INSTANCIA');
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');

    // QUANDO O ANGULAR INSTANCEIA O COMPONENTE, A PRIMEIRA COISA QUE CHAMA E O CONSTRUCTOR E PASSA AS DEPENDENCIAS MULTIPLAS
    return  this.http.get<Course[]>('/api/courses', {params});
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set('X-Auth', 'userId');
    return  this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
