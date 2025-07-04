let timer;

document.querySelector('.start').addEventListener('click' ,  () => {
    let startTime=1500;
    clearInterval(timer);
    document.querySelector('.timer-display').innerHTML='25:00';
    timer=setInterval(() => {
        if(startTime<=0){
            clearInterval(timer);
            document.querySelector('.timer-display').innerText='00:00';
            return;
        }
        startTime--;
        document.querySelector('.timer-display').innerHTML=formatedDisplay(startTime);
    },1000)
})

function formatedDisplay(startTime){
    let min=Math.floor(startTime/60);
    let sec=startTime%60;

    let formatedMin=min<10?`0${min}`:min;
    let formatedSec=sec<10?`0${sec}`:sec; 

    return `${formatedMin}:${formatedSec}`;
}


document.querySelector('.stop').addEventListener('click' , () => {
    clearInterval(timer);
})

document.querySelector('.reset').addEventListener('click' , () => {
    clearInterval(timer);
    document.querySelector('.timer-display').innerText='25:00'

})



