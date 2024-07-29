import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ContentChildren, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  // Old way of binding class. Use host instead.
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  // Legacy way of getting content child
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // 17.3 or later
  label = input.required<string>();
  private el = inject(ElementRef);

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // Angular 16 or later
    // Called when any part of app changes
    afterRender(() => {
      console.log('ControlComponent AfterRender');
      console.log('control', this.control());
    });

    afterNextRender(() => {
      console.log('ControlComponent AfterNextRender');
      console.log('control', this.control());
    });
  }

  ngAfterContentInit(): void {
    console.log('ControlComponent AfterContentInit');
    console.log('control', this.control());
  }

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    console.log('control', this.control());
  }
}
