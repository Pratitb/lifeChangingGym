//NAV BAR STYLING********************
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("header").style.background = "black";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}

//MOBILE MENU********************

let menu = document.querySelector('#mobile');
let mobileLinks = document.querySelector('#mobile a');
let menuButton = document.querySelector('.mobile-menu');
menuButton.addEventListener('click', showMenu);
function showMenu(){
  if(menu.style.display === 'flex'){
    menu.style.display = 'none';
  }
  else{
    menu.style.display = 'flex';
  }
}
menu.addEventListener('click', hideMenu)
function hideMenu(){
  menu.style.display = 'none';
}

//OWL CAROUSEL******************

$(".owl-carousel, .contact-owl-carousel").owlCarousel({
  loop: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});



AOS.init({
  duration: 2000,
 });