const array = [
  " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?",
  "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_",
  "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"
];

let buttonElement=document.querySelector('.btn-generate');
let displayPassword=document.getElementById('input-password');
let copyButton=document.querySelector('.fa-copy');
let copiedMessage=document.querySelector('.copied-message');
let passwordCopied=document.querySelector('.password-copied');
let timer;

buttonElement.addEventListener('click', () => {
    let password='';

    for(let i = 0 ; i < 14 ; i++){
        password+= array[Math.floor(Math.random() *array.length)]
    }

    displayPassword.value = password; 
});

copyButton.addEventListener('click', () => {
    displayPassword.select();
    displayPassword.setSelectionRange(0,14)
    navigator.clipboard.writeText(displayPassword.value);
    passwordCopied.innerText=displayPassword.value;

    copiedMessage.classList.add('copied-message-translate');
    clearTimeout(timer);
    timer = setTimeout(() => {
        copiedMessage.classList.remove('copied-message-translate');
    }, 2000);

        
});
