import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Traditional Inputs
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  // Signals Opttions
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });



  onSelectUser() { }
}