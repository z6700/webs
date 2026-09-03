const swiper = new Swiper('.slider-wrapper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
let button = document.querySelector("#menuBtn");
let navbar = document.querySelector(".nav-links");
let menu = document.querySelector("#menuBtn i");
let menua = document.querySelectorAll(".nav-links a")

button.addEventListener("click",function(){
  navbar.classList.toggle("show-menu")
  menu.classList.toggle("fa-bars")
  menu.classList.toggle("fa-xmark")
});
menua.forEach(function(link){
  link.addEventListener("click",function(){
    navbar.classList.remove("show-menu");
    menu.classList.add("fa-bars")
    menu.classList.remove("fa-xmark")
  });
});  
