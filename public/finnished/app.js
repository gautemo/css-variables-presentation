document.querySelector('input[type=color]').addEventListener('change', e => {
    document.querySelector('main').style.setProperty('--primary-color', e.target.value);
});

document.querySelector('input[type=range]').addEventListener('input', e => {
    document.documentElement.style.setProperty('--size', e.target.value + 'px');
});

document.querySelector('#bulb').addEventListener('click', () => {
    document.documentElement.classList.toggle('night');
});