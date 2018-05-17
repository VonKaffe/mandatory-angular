import { Component } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  constructor(private taskService: TaskService) {}

  ngOnInit(){
    this.taskService.getTasks(StatusType.NotStarted)
      .subscribe((list))=> {
      this.tasklist = list;
    });
  }
}
