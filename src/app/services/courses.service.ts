import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

// ELE E COMPATIVEL COM O SISTEMA DE INJEÇÃO DE DEPENDENCIA ESSA CLASS E AQUI
@Injectable({
  providedIn: 'root'
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
