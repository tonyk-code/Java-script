let button = document.querySelector('.add-note');
let container = document.querySelector('.container');

button.addEventListener('click', () => {
    addNote();
});

function addNote() {
    const textArea=document.createElement('textarea');
    textArea.name='note';
    textArea.className='note';
    textArea.placeholder='Empty Note';

    container.insertBefore(textArea, button);
}
