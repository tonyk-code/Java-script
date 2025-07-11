let buttonEl=document.querySelector('.load-more');
let imageContainer=document.querySelector('.image-grid');
const numberOfIMage=10;

buttonEl.addEventListener('click' , () =>{
    addImage();
})

function addImage() {
    for(let i=1;i<numberOfIMage;i++){  
        const image=document.createElement('img');
        image.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageContainer.appendChild(image)        
    }  
}


