const burger = document.querySelector('.promo__burger');
const menuBlock = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.nav__close-button');
const menuWrap = document.querySelector('.promo__nav-wrap');

burger.addEventListener('click', function(){
    menuBlock.classList.add('menu-open');
})

closeMenu.addEventListener('click', function(){
    menuBlock.classList.remove('menu-open');
})



