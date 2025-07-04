let timer;
let blink;
let blinkClass=document.querySelector('.timer-display');


document.querySelector('.start').addEventListener('click' , () => {

    blinkClass.classList.remove('timer-display-opacity');
    clearInterval(blink);
    clearInterval(timer);

    timer=setInterval( () => {
        formattedDisplay();
    },(1667/100))

})

let miniSec=0;
let sec=0;
let min=0;
let hour=0;

function formattedDisplay(){
    
    miniSec++;

    if(miniSec>59){
        miniSec=0;
        sec++;
    }

    if(sec>59){
        miniSec=0;
        sec=0;
        min++;
    }

    if(min>59){
        miniSec=0;
        sec=0;
        min=0;
        hour++
    }

    if(hour===23 && min===59 && sec===59 &&miniSec===59){
        clearInterval(timer);
        miniSec=0;
        sec=0;
        min=0;
        hour=0;
        document.querySelector('.timer-display').innerText=`24:00:00:00`;
        blink=setInterval(() => {
            blinkClass.classList.toggle('timer-display-opacity')
        },250);
    }

    let formatedMinisec=miniSec<10? `0${miniSec}` : miniSec;
    let formatedSec=sec<10? `0${sec}` : sec;
    let formatedMin=min<10? `0${min}` : min;
    let formatedHour=hour<10? `0${hour}` : hour;
    document.querySelector('.timer-display').innerText=`${formatedHour}:${formatedMin}:${formatedSec}:${formatedMinisec}`;
}

document.querySelector('.stop').addEventListener('click' , () => {
    clearInterval(timer);
    clearInterval(blink);
})

document.querySelector('.reset').addEventListener('click' , () => {
    clearInterval(timer)
    clearInterval(blink);
    miniSec=0;
    sec=0;
    min=0;
    hour=0;
    document.querySelector('.timer-display').innerText=`00:00:00:00`;
})