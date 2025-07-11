const buttonEl = document.querySelector('.emoji-button');
const emoji = document.querySelector('.emoji');
const emojiName = document.querySelector('.emoji-name');
const dataOfEmoji = [];
getEmoji();



buttonEl.addEventListener('click' , () => {
    displayEmoji();
})

async function getEmoji() {
    const response = await fetch('https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1')
    const data = await response.json();
    for( let  i = 0 ; i < data.length ; i++){
        dataOfEmoji[i]=
        {
            emoji: `${data[i].character}`,
            name: `${data[i].slug}`
        } 
    }
}

function displayEmoji(){
    if(dataOfEmoji.length > 1){
        const randomNumber=Math.floor(Math.random() * 1859)
        emoji.innerText = dataOfEmoji[randomNumber].emoji;
        emojiName.innerText = dataOfEmoji[randomNumber].name;
    }
    
}



    