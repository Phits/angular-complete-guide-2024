import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }>();

  enteredIntialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log('submitted');
    console.log('enteredIntialInvestment ', this.enteredIntialInvestment);
    console.log('enteredAnnualInvestment ', this.enteredAnnualInvestment);
    console.log('enteredExpectedReturn ', this.enteredExpectedReturn);
    console.log('enteredDuration ', this.enteredDuration);

    this.calculate.emit(
      {
        initialInvestment: +this.enteredIntialInvestment,
        annualInvestment: +this.enteredAnnualInvestment,
        expectedReturn: +this.enteredExpectedReturn,
        duration: +this.enteredDuration
      })
  }

}
