const buttonEl = document.querySelector('button');
const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');   
const monthToPay = document.getElementById('months'); 
const monthlyPayment = document.getElementById('monthly-payment');


buttonEl.addEventListener('click', () => {
    calculateLoan();
});

document.body.addEventListener('keydown' , (event) => {
    if (event.key === 'Enter') {
        calculateLoan();
    }
})

function calculateLoan(){

    const amount = parseFloat(loanAmount.value);
    const rate = parseFloat(interestRate.value) / 100 / 12;
    const months = parseInt(monthToPay.value);

    if (isNaN(amount) || isNaN(rate) || isNaN(months)) {
        monthlyPayment.textContent = 'Please enter valid numbers';
        return;
    }

    const payment = (amount * rate) / (1 - Math.pow((1 + rate), -months));
    
    if (isFinite(payment)) {
        monthlyPayment.textContent = `$${payment.toFixed(2)}`;
    } else {
        monthlyPayment.textContent = 'Calculation error';
    }    
}




