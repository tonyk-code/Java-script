const buttonEl = document.querySelector('.get-photos');
const inputVal = document.getElementById('input-number');
const displayMessage = document.querySelector('.display-message');
const displayImage = document.querySelector('.image-display');
let timer;



inputVal.addEventListener('keyup' , () => {
    checkValue();
})

function checkValue(){
    let value = Number(inputVal.value);
    if(value < 1 || value > 10){
        displayMessage.innerText='Number should be between 1 and 10'
    }

    else{
        displayMessage.innerText=''
    }
}

buttonEl.addEventListener('click' , () => {
    fetchImage();
})

async function fetchImage(){
    try{
        if(Number(inputVal.value) < 1 || Number(inputVal.value) > 10){
            let countBlinkTime=0;
            timer = setInterval( () => {
                if(countBlinkTime < 6){
                    countBlinkTime++;
                    if(countBlinkTime % 2 === 0){
                        displayMessage.innerText='Number should be between 1 and 10'
                        displayMessage.style.opacity=1
                    }

                    else{
                        displayMessage.style.opacity=0.3
                    }
                }

                else{
                    clearInterval(timer);
                    displayMessage.style.opacity=1;

                }
            },100)
        }

        else{
            let response = await fetch(`https://api.unsplash.com/photos?per_page=${inputVal.value}&page=${Math.round(Math.random() * 1000)}&client_id=TwqOmD7cXjLcwbzg-AiStzVDaHZEtaTx4AI2N30aFmw`);
            let responseData = await response.json()
            displayImage.innerHTML='';
            responseData.forEach(data => {
                let image = document.createElement('img');
                image.src = data.urls.regular;
                image.alt = 'Image';
                displayImage.appendChild(image)
            }); 
        }




    }catch(error){
        console.log('errrorr')
    }
}