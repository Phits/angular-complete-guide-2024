import { Component, Output, EventEmitter, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../tasks/task/task.model';
import { TasksService } from '../tasks/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  enteredTitle = '';
  enteredSummary = ''
  enteredDate = '';

  onCancelAddTack() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
