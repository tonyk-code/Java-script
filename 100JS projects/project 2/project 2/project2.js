const celcius=document.getElementById('celcius');
const fahrenheit=document.getElementById('fahrenheit');
const kelvin=document.getElementById('kelvin');

document.addEventListener('change' , (event) => {
    let inputValue=event.target;
    if(inputValue.name==='celcius'){
        let celciusValue=Number(celcius.value);
        fahrenheit.value=((celciusValue*(9/5))+32).toFixed(2);
        kelvin.value=(celciusValue+273.15).toFixed(2);
    }

    else if(inputValue.name==='fahrenheit'){
        let fahrenheitValue=Number(fahrenheit.value);
        celcius.value=((fahrenheitValue-32)*(5/9)).toFixed(2);
        kelvin.value=(((fahrenheitValue-32)*(5/9))+273.15).toFixed(2);
    }

    else if(inputValue.name==='kelvin'){
        let kelvinValue=Number(kelvin.value);
        celcius.value=(kelvinValue-273.15).toFixed(2);
        fahrenheit.value=(((kelvinValue-273.15)*(9/5))+32).toFixed(2);
    }
})