const peoples=[
    {
        image: 'images/img-1.jpg',
        quote: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
        name: 'Constantine V'
    },

    {
        image: 'images/img-0.jpg',
        quote: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
        name: 'Rosetta Q'
    },

    {
        image: 'images/img-2.jpg',
        quote: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
        name: 'Cherise G'
    }

]

function display(index){
    document.querySelector('.container').innerHTML=`
        <img src="images/img-${index}.jpg" alt="image" width="100" height="100">
        <p class="quote">${peoples[index].quote}</p>
        <p class="author-name">${peoples[index].name}</p>
    `
}

let index=1;

setInterval(() => {
    display(index);
    index++;
 
    if(index>=peoples.length){
        index=0;
    }
    
},2000)