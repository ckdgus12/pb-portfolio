//내비게이션
const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".navbar");
const navBg = document.querySelector(".nav_bg");
const navLinks = document.querySelectorAll("header nav a");


menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
  navBg.classList.toggle("active");
  });




const backToTop = document.getElementById('backtotop');

function checkScroll() {
   
  let pageYOffset = window.pageYOffset

  if(pageYOffset !== 0) {
    backToTop.classList.add('show');
  }else{
    backToTop.classList.remove('show');
  }
}

function moveBackToTop() {
   if (window.pageYOffset >0 ){


    window.scrollTo({top: 0, behavior:"smooth"})
   }
}


window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);




// swiper
var swiper = new Swiper(".mySwiper", {
  // loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  breakpoints: {
    600:{
      slidesPerView: 2.4,  //브라우저가 768보다 클 때
      spaceBetween: 30,
    },
    1100: {
        slidesPerView: 3.8,  //브라우저가 768보다 클 때
        spaceBetween: 30,
    },
    1400: {
        slidesPerView: 4.8,  //브라우저가 1200보다 클 때
        spaceBetween: 50,
    }
  }
});
