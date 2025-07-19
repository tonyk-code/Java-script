document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('button-active');
        button.isNeighbour

        let icon = button.querySelector('.icon');       
        let greenDot = button.querySelector('.green-dot'); 

        if (icon) icon.classList.add('icon-active');
        if (greenDot) greenDot.classList.add('green-dot-active');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('button-active');

        let icon = button.querySelector('.icon');
        let greenDot = button.querySelector('.green-dot');

        if (icon) icon.classList.remove('icon-active');
        if (greenDot) greenDot.classList.remove('green-dot-active');
    });
});
