import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {COURSES} from '../../db-data';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
 course: Course;

  @Input()
  cardIndex: number;
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {



  }
  ngOnInit(): void {
  }


  oncourseViewed() {
    this.courseSelected.emit(this.course);
  }





}
