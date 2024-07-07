export interface InvestmentInput {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
}

// Alternative to the above code
// export type InvestmentResults = {
//     enteredIntialInvestment: number,
//     enteredAnnualInvestment: number,
//     enteredExpectedReturn: number,
//     duration: number
// }