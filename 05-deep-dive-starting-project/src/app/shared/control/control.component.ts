import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // Old way of binding class. Use host instead.
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  label = input.required<string>();

  // onClick() {
  //   console.log('Control clicked');
  // }
}
