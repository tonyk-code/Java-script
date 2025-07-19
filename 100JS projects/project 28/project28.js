const scoreNumber = document.querySelector('.score-number');
const multiplicand = document.querySelector('.multiplicand');
const multiplier = document.querySelector('.multiplier');
const buttonEl = document.querySelector('.btn-submit');
const inputVal = document.querySelector('.input-val');


let score = JSON.parse(localStorage.getItem('score')) || 0;

let multiplierNumber;
let multiplicandNumber;


setNumber();

function setNumber(){ 
    scoreNumber.innerText = score;   
    multiplicandNumber = Math.floor(Math.random() * 10);
    multiplierNumber = Math.floor(Math.random() * 10);

    multiplicand.innerText = multiplicandNumber;
    multiplier.innerText = multiplierNumber;
}

buttonEl.addEventListener('click' , () => {
    checkNumber();
})

document.body.addEventListener('keydown' , (event) => {
    if ( event.key === 'Enter' ){
        checkNumber();
    }
})

function checkNumber(){
    if(inputVal.value === ''){
        inputVal.placeholder = '';
        setTimeout( () => {
            inputVal.placeholder = 'Enter Your Answer'
        } , 200)
    }

    else{
        if( ( multiplicandNumber * multiplierNumber ) === Number(inputVal.value)){
            score++;
        }

        else{
            score--;
        }

        setNumber();
        inputVal.value = '';
        localStorage.setItem('score' , JSON.stringify(score));
    }
}


