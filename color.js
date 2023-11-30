const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function (button) {
    button.addEventListener('click',function(e){ // e is click event
        if (e.target.id === 'black') {
            body.style.backgroundColor = 'black';
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = 'rgb(230,62,98)';
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = ' rgb(254,254,250)';
        }
        if (e.target.id === 'grey') {
            body.style.backgroundColor =  'rgb(119,136,153)' ;
        }

    })
});

