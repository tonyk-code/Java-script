let buttons = document.querySelector('.option-button');
let arrowRotate= document.querySelector('.arrow-image-js');
let getMedia=document.querySelector('.display-selected-media');
let mediaList = document.querySelector('.choose-media-js');


let socialMedia=[
    {
        id: '1',
        image: 'facebook.png',
        name: 'Facebook'
    },
    {
        id: '2',
        image: 'youtube.png',
        name: 'YouTube'
    },
    {
        id: '3',
        image: 'instagram.png',
        name: 'Instagram'
    },
    {
        id: '4',
        image: 'twitter.png',
        name: 'Twitter'
    },
]



document.querySelector('.select-media-js').addEventListener('click', () => {
    arrowRotate.classList.toggle('arrow-rotate-js')

    if(arrowRotate.classList.contains('arrow-rotate-js')) {

        let listItems = '';
        socialMedia.forEach(media => {
            listItems += `
                <li>
                    <button class="option-button option-button-${media.id}" onclick="displaMedia(${media.id});">
                        <img src="${media.image}" alt="${media.name}" width="15" height="15" class="favicon-image">
                        <p>${media.name}</p>
                    </button>
                </li>
            `;
        });
        mediaList.classList.add('choose-media');
        mediaList.innerHTML = '<ul>' + listItems + '</ul>';

    } else {
        mediaList.innerHTML = '';
        mediaList.classList.remove('choose-media');
    }
});


function displaMedia(id) {
    socialMedia.forEach( (media) => {
        if(media.id == id) {
            getMedia.innerHTML = `
                <img src="${media.image}" alt="${media.name}" width="15" height="15" class="favicon-image">
                <p>${media.name}</p>
            `;
            
            
        }
    });
}
