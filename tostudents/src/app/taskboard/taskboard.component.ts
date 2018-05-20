
import { Component } from '@angular/core';
import { StatusType } from "../constants";
import { TaskService } from '../task.service'

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  private statusList = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];
  showTaskForm = false;
  changeValueTaskForm(){
    this.showTaskForm = !this.showTaskForm;
  }
  saveInput(param){
    console.log(param);
    this.taskService.addTask(param.title, param.description);
    this.changeValueTaskForm();
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.error('status:', StatusType['NotStarted']);
  }
}
