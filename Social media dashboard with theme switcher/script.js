const toggle = document.querySelector('.slider.round');
const hero = document.querySelector('.hero');
const main = document.querySelector('.main');
const media = document.querySelector('.social-media-section');
const headert = document.querySelector('.overview-header');
const items = document.querySelector('.overview-section');

toggle.addEventListener('click', () => {
    hero.classList.toggle('dark');
    main.classList.toggle('dark');
    media.classList.toggle('dark');
    headert.classList.toggle('dark');
    items.classList.toggle('dark');
})