const buttonElement= document.querySelector('.calculate');

document.body.addEventListener('keydown' , (event)=>{
    if(event.key==='Enter'){
        calculateTotalAge();
    }
})

buttonElement.addEventListener('click' , () => {
    calculateTotalAge();
})

function calculateTotalAge(){
    let inputValue=document.getElementById('dob');
    let currentDate=new Date();
    let currenYear=currentDate.getFullYear();

    let dob=new Date(inputValue.value);
    let year=dob.getFullYear();

    let totalAge=Math.floor((currenYear-year));

    if(inputValue.value!==NaN){
            document.querySelector('.js-display-age').innerText=`Your age is ${totalAge} years old`
    }
}