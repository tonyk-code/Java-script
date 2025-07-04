const paragraphDisplay=[
    {
        id: '1',
        content: 'Technology is constantly reshaping the way we live, work, and connect with others. From smartphones to artificial intelligence, innovation is moving at a pace faster than ever before. Staying informed and adaptable is key to thriving in this evolving digital landscape.'
    },
    {
        id: '2',
        content: `Behind every successful project lies a clear plan, careful execution, and consistent effort. It's not just about ideas—it's about making them real. Paying attention to the small details often determines whether a solution will stand the test of time or fall apart under pressure.`
    },
    {
        id: '3',
        content: `As we wrap up, it's important to reflect on the journey and lessons learned along the way. Progress isn't always linear, but persistence pays off. Celebrate the small wins, stay curious, and always keep an eye on what's next.`
    }
]


let disaplyStep=document.querySelector('.step');



let previous=document.querySelector('.step1');

document.querySelectorAll('button').forEach( buttons => {
    buttons.addEventListener('click' , () => {
        let contentId=String(buttons.dataset.buttId);
        let now = buttons;

        previous.classList.remove('live')
        buttons.classList.add('live');
        
        previous=now;
        disaplyStep.innerText=buttons.innerText;

        paragraphDisplay.forEach((value,i) => {
            if(value.id === contentId){
                document.querySelector('.display-paragraph').innerText=value.content;
            }
        })

                
    })
})

