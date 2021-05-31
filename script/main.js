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