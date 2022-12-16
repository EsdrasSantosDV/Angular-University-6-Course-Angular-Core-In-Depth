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


  constructor() {

  }

  courseSelected($event: Course) {
    console.log($event);
  }
}
