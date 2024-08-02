import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Old Way 
  // @Input({ required: true }) size!: { width: string; height: string };
  // Must use same name as input but with Change suffix
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // Modern way 17.2 or later
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // Old Way
    // this.sizeChange.emit({
    //   width: '200', height: '100'
    // });

    // 17.2 or later way
    this.size.set({
      width: '200', height: '100'
    })

  }
}
