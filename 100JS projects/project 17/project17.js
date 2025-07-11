let quote=document.querySelector('.quote');
let quoteAuthor=document.querySelector('.qoute-author');
let generateQuote=document.querySelector('.generate-quote');
let apiURL = "https://api.quotable.io/random";

generateQuote.addEventListener('click' , () => {
    getQuote();
})

async function getQuote(){
    quote.innerText='Updating...'
    quoteAuthor.innerText='Updating...'
    try{
        let response = await fetch(apiURL);
        if(response.ok){
            let data = await response.json();
            console.log(data)
            quote.innerText=data.content
            quoteAuthor.innerText=data.author
        }

        else{
            throw Error('ApiERRor')
        }
        
    }catch(err){
        quote.innerText='Unknown Error, Try Again Later'
        quoteAuthor.innerText='Unknown Error, Try Again Later'
    }
    

}

getQuote();

