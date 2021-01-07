const container = document.querySelector('.container');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const body = document.querySelector('body');

openBtn.addEventListener('click', () => {
    container.classList.add('showNav');
})

closeBtn.addEventListener('click', () => {
    container.classList.remove('showNav');
})
