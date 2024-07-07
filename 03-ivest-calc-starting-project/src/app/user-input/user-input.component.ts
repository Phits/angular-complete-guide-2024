import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  // Without Singals
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredIntialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  onSubmit() {
    this.calculate.emit(
      {
        initialInvestment: +this.enteredIntialInvestment(),
        annualInvestment: +this.annualInvestment(),
        expectedReturn: +this.expectedReturn(),
        duration: +this.duration()
      });
    this.enteredIntialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }

}
function singal(arg0: number): number {
  throw new Error('Function not implemented.');
}

