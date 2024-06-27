import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<string>();

  addTask() {
    console.log('1. Add Task');
    this.add.emit();
  }
}


