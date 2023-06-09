let burgerBtn = document.querySelector('.burger');
let menu = document.querySelector('.nav-mini');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active')
})

const arrowLeft = document.querySelector('.arrow-left')
const arrowRigtt = document.querySelector('.arrow-right')
const num = document.querySelector('.num')

