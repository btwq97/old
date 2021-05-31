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

/* one set of modal. Any way to refactor this o.o */
// const modal = document.querySelectorAll();
// Get the modal
var modal1 = document.getElementById("myModal-1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("popImg-1");
var modalImg1 = document.getElementById("img-1");
var captionText1 = document.getElementById("caption-1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
};
modal1.onclick = function() { 
  modal1.style.display = "none";
};
/* =============================== */

var modal2 = document.getElementById("myModal-2");
var img2 = document.getElementById("popImg-2");
var modalImg2 = document.getElementById("img-2");
var captionText2 = document.getElementById("caption-2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};
modal2.onclick = function() { 
  modal2.style.display = "none";
};

var modal3 = document.getElementById("myModal-3");
var img3 = document.getElementById("popImg-3");
var modalImg3 = document.getElementById("img-3");
var captionText3 = document.getElementById("caption-3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
modal3.onclick = function() { 
  modal3.style.display = "none";
};

var modal4 = document.getElementById("myModal-4");
var img4 = document.getElementById("popImg-4");
var modalImg4 = document.getElementById("img-4");
var captionText4 = document.getElementById("caption-4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};
modal4.onclick = function() { 
  modal4.style.display = "none";
};

var modal5 = document.getElementById("myModal-5");
var img5 = document.getElementById("popImg-5");
var modalImg5 = document.getElementById("img-5");
var captionText5 = document.getElementById("caption-5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};
modal5.onclick = function() { 
  modal5.style.display = "none";
};

var modal6 = document.getElementById("myModal-6");
var img6 = document.getElementById("popImg-6");
var modalImg6 = document.getElementById("img-6");
var captionText6 = document.getElementById("caption-6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
};
modal6.onclick = function() { 
  modal6.style.display = "none";
};

var modal7 = document.getElementById("myModal-7");
var img7 = document.getElementById("popImg-7");
var modalImg7 = document.getElementById("img-7");
var captionText7 = document.getElementById("caption-7");
img7.onclick = function() {
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
};
modal7.onclick = function() {
  modal7.style.display = "none";
};
