let generateColor=document.querySelector('.generate-color');

const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

generateRandomColor();

document.body.addEventListener('keydown' , (event) => {  
  if(event.key===' '){
    generateRandomColor();   
  }
})  

generateColor.addEventListener('click' , () => {
    generateRandomColor();
});

function generateRandomColor(){
    for( let i = 1 ; i <= 6 ; i++){
      let hexaDecimal='#';
      for( let j = 1 ; j <= 6 ; j++){
        hexaDecimal += hexArray[Math.floor(Math.random() * hexArray.length)]
      }

      let color= document.querySelector(`.color-${i}`);

      if(color){
        color.style.background=hexaDecimal;
        document.querySelector(`.color-code-${i}`).innerText=hexaDecimal;
        document.querySelector(`.color-code-${i}`).style.color=getContrastColor(hexaDecimal);
      }

    }
}

function getContrastColor(hex) {

  hex = hex.replace('#', '');


  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);


  const brightness = (r * 299 + g * 587 + b * 114) / 1000;


  return brightness > 128 ? '#000000' : '#FFFFFF';
}

