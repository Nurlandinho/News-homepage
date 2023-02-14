const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const nav = document.querySelector('nav')


menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none';
    nav.classList.add('open')
    nav.classList.add('comein')
    nav.classList.remove('comeout')
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('comein')
    nav.classList.remove('open')
    menuBtn.style.display = 'block';
})