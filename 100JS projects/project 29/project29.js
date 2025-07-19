const positionX = document.querySelector('.value-x');
const positionY = document.querySelector('.value-y');

document.body.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    positionX.innerText = x;
    positionY.innerText = y;
    
});
