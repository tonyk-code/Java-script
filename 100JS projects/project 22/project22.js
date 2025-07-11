
document.querySelectorAll('button')
    .forEach((button,index) => {
        button.addEventListener('click' , () => {
            let answer=document.querySelector(`.show-answer-${index+1}`);
            answer.classList.toggle('show-answer-not-collapsed')
            if(answer.classList.contains('show-answer-not-collapsed')){
                button.innerHTML='<i class="far fa-minus-square"></i>'
            }

            else{
                button.innerHTML='<i class="far fa-plus-square"></i>'
            }
    })
})