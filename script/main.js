/* nav */
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelectorAll(".nav-menu, .nav-logo");

hamburger.addEventListener("click", mobileMenu);
menu.forEach(item => item.addEventListener("click", mobileMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  for (let i=0; i<menu.length; i++){
    menu[i].classList.toggle("active");
  }
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

for (let i=0; i<modal.length; i++) {
  popImg[i].addEventListener("click", function() {
    modal[i].classList.toggle("hide");
  });
  modal[i].addEventListener("click", function() {
    modal[i].classList.toggle("hide");
  });
};

/* dark mode */
const toggleDarkMode = document.querySelector("#darkMode");

// For body, header, footer
const mainBulk = document.querySelectorAll("body, .header, .nav-logo, .nav-link, .nav-menu, .bar, .menu__item");
// For dropdowns
const dropdown = document.querySelectorAll(".dropdown-content, .copyright");
// For modal/polaroids
const modalPopUp = document.querySelectorAll(".content, .polaroid");
// For timeline, and table in ee2033
const timeline = document.querySelectorAll(".timeline-container, .timeline, .right, .left, .mode");

/* for default reload of pages */
const isDark = localStorage.getItem("dark");
if (isDark == "true") {
  enableDarkMode();
} else {
  disableDarkMode();
}

toggleDarkMode.addEventListener("click", function() {
  let isDark = localStorage.getItem("dark");
  if (isDark == "true") {
    localStorage.setItem("dark", "false");
    disableDarkMode();
  } else {
    localStorage.setItem("dark", "true");
    enableDarkMode();
  }
})

function enableDarkMode() {
  for (let i=0; i<mainBulk.length; i++){
    mainBulk[i].classList.add("dark");
  }
  for (let i=0; i<dropdown.length; i++){
    dropdown[i].classList.add("dark");
  }
  for (let i=0; i<modalPopUp.length; i++){
    modalPopUp[i].classList.add("dark");
  }
  for (let i=0; i<timeline.length; i++){
    timeline[i].classList.add("dark");
  }
}

function disableDarkMode() {
  for (let i=0; i<mainBulk.length; i++){
    mainBulk[i].classList.remove("dark");
  }
  for (let i=0; i<dropdown.length; i++){
    dropdown[i].classList.remove("dark");
  }
  for (let i=0; i<modalPopUp.length; i++){
    modalPopUp[i].classList.remove("dark");
  }
  for (let i=0; i<timeline.length; i++){
    timeline[i].classList.remove("dark");
  }
}

