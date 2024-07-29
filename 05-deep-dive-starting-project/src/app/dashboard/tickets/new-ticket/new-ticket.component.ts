import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // Selector multiple elements
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[];

  // 17.3 Only
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, textInput: string) {
    console.dir(titleInput);
    console.log(titleInput);
    this.form().nativeElement.reset();
  }
}
