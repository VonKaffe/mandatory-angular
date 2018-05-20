
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StatusType } from '../constants';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  @Input() showTaskForm;
  newTask = {title: '', description: ''};
  @Output() saveInput: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getValue(){
    this.saveInput.emit(this.newTask);
    this.resetForm()
  }
  resetForm(){
    this.newTask = {title: '', description: ''}
  }
}
