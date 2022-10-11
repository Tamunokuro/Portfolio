'use strict';
const btnMenu = document.querySelector('.humburger');
const myoverlay = document.querySelector('#myoverlay');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar-nav');
const navlink = document.querySelectorAll('.nav-link');


// Menu item function 
btnMenu.addEventListener('click', function(e){
    e.preventDefault()
    btnMenu.classList.toggle("active");
    navbar.classList.toggle("active")
    myoverlay.classList.toggle("overlay");
    body.classList.toggle("overflow")
 })

navlink.forEach((nav) => {
    nav.addEventListener('click', function(){
        myoverlay.classList.toggle("overlay")
        btnMenu.classList.toggle("active");
        navbar.classList.toggle("active")
        body.classList.toggle("overflow")
    })
})
