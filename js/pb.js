  (() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  let scrollY = 0; 
  let headerHeight = document.querySelector("header").offsetHeight;
  const screenHeight = screen.availHeight;

  html.style.overflow = "hidden";

  window.onkeydown = function () {
    const kcode = event.keyCode;
    if (kcode == 116 || kcode == 82) {
      window.location.reload(true);
    }
  };


  window.addEventListener("load", () => {
    scrollTo(0, 0);
    setTimeout(() => {
      load.classList.add("hide");
      html.style.overflow = "auto";
      load.style.opactiy = "2";
    }, 3000);
 


    
  });









//내비게이션
const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".navbar");
const navBg = document.querySelector(".nav_bg");


//햄버거 버튼
  menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
  navBg.classList.toggle("active");
  });

for (let i = 0; i < navLinks.length; i++){
  let sectionOffsetTop = sections[i].offsetTop;
  let sectionOffsetHeight = sections[i].offsetHeight;
  

  logoBtn.addEventListener("click", () =>{
    window.scrollTo(0, 0);
  });

  navLinks[i].addEventListener("click", () => {
    window.scrollTo(0, sections[i].offsetTop - headerHeight);
  });
  
  // 첫 로딩
  navLinks[0].classList.add("active");

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    if(
      scrollY >= sectionOffsetTop - headerHeight &&
      scrollY < sectionOffsetTop + sectionOffsetHeight - headerHeight
    ) {
      navLinks[i].classList.add("active");
    } else {
      navLinks[i].classList.remove("active");
    }
  });
}




//햄버거 버튼
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

})();