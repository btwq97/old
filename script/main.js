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
    
Hello! I am currently an undergraduate pursuing a Bachelor's Degree in Electrical Engineering. My specialization is in Internet of Things, 5G and Next Generation Networks and Advanced Electronics.

I started picking up programming classes as an elective in my University. Even though it was hard to grasp the concepts initially, I find myself enjoying the modules and wanting to learn more. As time goes by, I honed my skills in the fields of embedded systems and firmware development and I aspire to work in these industries in the future.

My professional internship experience includes firmware development, data collection from IoT sensors, designing of cloud architecture and dashboard design. I am well versed in popular communication protocols such as MQTT and Modbus, and have actual work experiences with time-series database such as AWS Timestream and TimescaleDB. As both my internships happens to be a startup, it gave me the opportunity to have full ownership over the projects and I get to see them from development to production.

In my free time, I work on some side projects such as 2D game development using SFML and picked up some basic front end development using HTML5 and CSS3.

Interests: Cloud Infrastructure, IoT, Firmware Development, Embedded Systems`;
    
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