document.querySelector('input[type=color]').addEventListener('change', e => {
    console.log(e.target.value);
});

document.querySelector('input[type=range]').addEventListener('input', e => {
    console.log(e.target.value);
    //document.documentElement.style.setProperty('--text', e.target.value + 'px');
});

document.querySelector('#bulb').addEventListener('click', () => {
    console.log('clicked');
    //document.documentElement.classList.toggle('night');
});