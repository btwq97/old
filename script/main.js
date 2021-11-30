/* nav */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logoNav = document.querySelector(".nav-logo");

hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", mobileMenu);
logoNav.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logoNav.classList.toggle("active");
}

/* terminal */
// setup typewriter effect in the terminal
if (document.getElementsByClassName('typing').length > 0) {
    var i = 0;
    var txt = `./about_me
    
Hello! I am currently an undergraduate pursuing a Bachelor's Degree in Electrical Engineering and I specialize in the Internet of Things. My industrial tracks are in 5G and Next Generation Networks and Advanced Electronics.

My professional internship experience includes firmware development, data collection from IoT sensors, designing of cloud architecture and dashboard design. I am well versed in popular communication protocols such as MQTT and Modbus, and have actual work experiences with time-series database such as AWS Timestream and TimescaleDB. As both my internships happens to be a startup, it gave me the opportunity to have full ownership over the projects and I get to see them from development to production.

In my free time, I work on some side projects such as 2D game development using SFML and picked up some basic front end development using HTML5 and CSS3.

Interests: Cloud Infrastructure, IoT, Embedded Systems, Linux, Scripting, Automation`;
    
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

