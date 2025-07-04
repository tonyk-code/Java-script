let playButton=document.querySelector('.watch-now');
let content=document.querySelector('.container');
let popUp=document.querySelector('.video-css');
let closeWindow=document.querySelector('.close-button');
let vidPlaying=document.querySelector('.vid');


playButton.addEventListener('click' , () => {
    content.classList.add('active1');
    popUp.classList.remove('active2');
})

closeWindow.addEventListener('click' , () => {
    content.classList.remove('active1');
    popUp.classList.add('active2');
    vidPlaying.pause();
    vidPlaying.currentTime=0;
})