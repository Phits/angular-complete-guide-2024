import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // Before Angular 17
  // @Input({ required: true }) image!: {
  //   src: string,
  //   alt: string
  // };
  // @Input({ required: true }) title!: string;

  // Angular 17 or later
  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();
}
