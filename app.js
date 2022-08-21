


let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelector(".nav__link");
let body = document.querySelector("body");

menuToggler.addEventListener("click",  () =>{
    body.classList.toggle("open");
});