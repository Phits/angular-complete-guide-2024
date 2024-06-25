import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Traditional
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // New way to do it but not a signal
  // Exits if using sinal input and simpler code
  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() { 
    this.select.emit(this.id);
  }

  // Signals Inputs
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });
}