document.querySelector('.js-calculate').
    addEventListener('click' , () => {
        claculateTotal();
    })

function claculateTotal(){
    const billAmount=document.querySelector('.js-input1');
    const tipPercentage=document.querySelector('.js-input2');

    let bill=Number(billAmount.value*100);
    let tip=Number(tipPercentage.value*100);

    let total=((bill + ((bill*tip)/10000))/100).toFixed(2);

    billAmount.value='';
    tipPercentage.value='';
    document.querySelector('.display-result').innerHTML=`$${total}`
}

document.body.addEventListener('keydown' , () => {
    if(event.key==='Enter'){
        claculateTotal();
    }
})