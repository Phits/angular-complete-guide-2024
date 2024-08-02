import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // Old way
  // @Output() add = new EventEmitter<{ title: string, request: string }>();

  // Modern way
  add = output<{
    title: string;
    request: string
  }>();

  // Selector multiple elements
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[];

  // 17.3 Only
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('OnInit');
    console.log('form', this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('form', this.form?.nativeElement);
  }

  onSubmit(titleInput: string, textInput: string) {
    // console.dir(titleInput);
    // console.log(titleInput);

    this.add.emit({
      title: titleInput,
      request: textInput
    });

    this.form?.nativeElement.reset();
  }
}
