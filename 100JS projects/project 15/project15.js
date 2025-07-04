let barIcon = document.querySelector('.fa-bars');
let sideBar = document.querySelector('.side-bar');
let closeIcon = document.querySelector('.fa-xmark');
let timeOut;

barIcon.addEventListener('click', () => {
    toggleFav();

    sideBar.classList.toggle('side-bar-close');
});

closeIcon.addEventListener('click', () => {
    if (sideBar.classList.contains('side-bar-close')) {
        sideBar.classList.remove('side-bar-close');
    } 
});



function toggleFav() {
    barIcon.classList.add('fa-flip');
    clearInterval(timeOut);
    timeOut = setTimeout(() => {
        barIcon.classList.remove('fa-flip');
    }, 1000);
}