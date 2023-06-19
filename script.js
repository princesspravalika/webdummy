let menu = document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
let wapper=document.querySelector('wapper');
const btnPopup=document.querySelector('btnLogin-popup');
menu.onclick=() =>{
     menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
