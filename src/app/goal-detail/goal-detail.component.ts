import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  [x: string]: any;

  //add input import L1  & goal class importthat allow input prop binding

  @Input()
  goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }
  
  goalDelete(complete: boolean) {
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

  //toggle strike though display
  toggleDetails(index: string | number) {
    this.goals[index] = !this.goals[index];
  }

}
