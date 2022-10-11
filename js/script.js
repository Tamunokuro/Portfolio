const btnMenu = document.querySelector('.humburger');
const myoverlay = document.querySelector('#myoverlay');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar-nav');
const navlink = document.querySelectorAll('.nav-link');

// Menu item function 
const mobileMenu = btnMenu.addEventListener('click') = () => {
    btnMenu.classList.toggle('active');
    navbar.classList.toggle('active')
    myoverlay.classList.toggle('overlay');
    body.classList.toggle('overflow')
 }

const togglemenu = navlink.forEach((nav) => {
  nav.addEventListener('click', function(){
    myoverlay.classList.toggle('overlay')
    btnMenu.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('overflow');
  })
})
