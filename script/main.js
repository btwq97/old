/* nav */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logoNav = document.querySelector(".nav-logo")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logoNav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link, .nav-logo");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    logoNav.classList.remove("active");
}

/* terminal */
// setup typewriter effect in the terminal
if (document.getElementsByClassName('typing').length > 0) {
    var i = 0;
    var txt = `./about_me
    
    I am an undergraduate pursuing a bachelor's degree in Electrical Engineering in the National University of Singapore (NUS).
    
    I am always seeking for new challenges and is an aspiring firmware engineer specialising in the Internet of Things.
    
    Outside of school, I am an adventurous person and occasionally hits the gym to distress :D`;
    
    var speed = 10;
  
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('typing')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
}

/* modals */
const modal = document.querySelectorAll(".modal");
const popImg = document.querySelectorAll(".popImg");
const myClose = document.querySelectorAll(".close");

for (let i=0; i<modal.length; i++) {
  popImg[i].addEventListener("click", function() {
    modal[i].classList.toggle("hide");
  });
  modal[i].addEventListener("click", function() {
    modal[i].classList.toggle("hide");
  });
};

/* dark mode */
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const nav_logo = document.querySelector(".nav-logo");
const nav_link = document.querySelectorAll(".nav-link");
const nav_menu = document.querySelectorAll(".nav-menu");
const bar = document.querySelectorAll(".bar");
const footer = document.querySelector(".footer");
const menu_item = document.querySelectorAll(".menu__item");
const timeline = document.querySelectorAll(".timeline-container");
const right = document.querySelectorAll(".right");
const left = document.querySelectorAll(".left");
const content = document.querySelectorAll(".content");
const polaroid = document.querySelectorAll(".polaroid");

darkMode.addEventListener("click", changeMode);

function enableDarkMode() {
  body.classList.add("dark");
  header.classList.add("dark");
  nav_logo.classList.add("dark");
  for (let i=0; i<nav_link.length; i++){
    nav_link[i].classList.add("dark");
  }
  for (let i=0; i<nav_menu.length; i++){
    nav_menu[i].classList.add("dark");
  }
  for (let i=0; i<bar.length; i++){
    bar[i].classList.add("dark");
  }
  footer.classList.add("dark");
  for (let i=0; i<menu_item.length; i++){
    menu_item[i].classList.add("dark");
  }
  for (let i=0; i<timeline.length; i++){
    timeline[i].classList.add("dark");
  }
  for (let i=0; i<right.length; i++){
    right[i].classList.add("dark");
  }
  for (let i=0; i<left.length; i++){
    left[i].classList.add("dark");
  }
  for (let i=0; i<content.length; i++){
    content[i].classList.add("dark");
  }
  for (let i=0; i<polaroid.length; i++){
    polaroid[i].classList.add("dark");
  }
}

function disableDarkMode() {
  body.classList.remove("dark");
  header.classList.remove("dark");
  nav_logo.classList.remove("dark");
  for (let i=0; i<nav_link.length; i++){
    nav_link[i].classList.remove("dark");
  }
  for (let i=0; i<nav_menu.length; i++){
    nav_menu[i].classList.remove("dark");
  }
  for (let i=0; i<bar.length; i++){
    bar[i].classList.remove("dark");
  }
  footer.classList.remove("dark");
  for (let i=0; i<menu_item.length; i++){
    menu_item[i].classList.remove("dark");
  }
  for (let i=0; i<timeline.length; i++){
    timeline[i].classList.remove("dark");
  }
  for (let i=0; i<right.length; i++){
    right[i].classList.remove("dark");
  }
  for (let i=0; i<left.length; i++){
    left[i].classList.remove("dark");
  }
  for (let i=0; i<content.length; i++){
    content[i].classList.remove("dark");
  }
  for (let i=0; i<polaroid.length; i++){
    polaroid[i].classList.remove("dark");
  }
}

function changeMode() {
  if (darkMode.checked) {
    disableDarkMode();
  } 
  else {
    enableDarkMode();
  }
}