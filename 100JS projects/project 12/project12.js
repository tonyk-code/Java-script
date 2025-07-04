let imageHeight=document.querySelector('.image-scroll');


window.addEventListener('scroll' , () => {
    
    if(window.scrollY > imageHeight.offsetHeight ){
        document.querySelector('.header-nav').classList.add('live');
    }

    else{
        document.querySelector('.header-nav').classList.remove('live');
    }
});