let textArea = document.getElementById("textarea-ch-count");
let charCounter = document.getElementById("char-count");
let remainingCounter = document.getElementById("remaining-count");

textArea.addEventListener("keyup" , () => {
    updateCounter();
});

let timer; 
updateCounter();


function updateCounter() {
    charCounter.innerText= textArea.value.length;
    remainingCounter.innerText = Number(textArea.getAttribute('maxlength')) - Number(charCounter.innerText);

    

    if(remainingCounter.innerText == 0 && !timer){
        timer=setInterval(() => {
            textArea.classList.toggle('container-full-length');
        }, 1000);
    }

    else  {
        clearInterval(timer);
        textArea.classList.remove('container-full-length');
    }
    
}