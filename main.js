let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.header__list');
let headerImage = document.querySelector('.header__image');



headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerImage.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})