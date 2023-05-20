// #  The EMI (Equated Monthly Installment) formula is used to 
// # calculate the fixed monthly payment that a borrower needs to make towards a loan,
// # which includes both the principal amount and the interest. The formula to calculate EMI is as follows:

// #  EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)

// # Where:
// # EMI = Equated Monthly Installment
// # P = Principal loan amount
// # r = Monthly interest rate (annual interest rate divided by 12 and multiplied by 0.01)
// # n = Number of monthly installments


// def emi_calculator(p,r,n):
//     ra = float(r/12/100)
//     return (p * ra * pow(1 + ra, n)) / (pow(1 + ra, n) - 1)

const loanAmt = document.getElementById('loan')
const interestRate = document.getElementById('interest')
const tenure = document.getElementById('tenure')
const result = document.getElementById('result')
const form = document.querySelector('form')

function emi(e){
    p = parseFloat(loanAmt.value)
    r = parseFloat(interestRate.value)
    n = parseFloat(tenure.value)
    let ra = parseFloat(r/12/100)
    result.value = ((p * ra * Math.pow(1 + ra, n)) / (Math.pow(1 + ra, n) - 1)).toFixed(3)
    e.preventDefault()

}
form.addEventListener('submit', emi)