document.body.addEventListener('keydown' , (event) => {
    if(event.key==='Enter'){
        calculateWeightInKg();
    }
})

function calculateWeightInKg(){

    let weightInLb = document.querySelector('.js-input-value').value;
    if(weightInLb===''){
        document.querySelector('.if-null').innerText='⚠️Enter a Value'
    }

    else{
        let weightInKg = (weightInLb * (453592/1000000)).toFixed(2);
        document.querySelector('.if-null').innerText=''
        document.querySelector('.display-result-in-kg').innerText=weightInKg;
    }
    
}