(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  const introP = document.querySelector('.main-text .anim');
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
    }, 3500);
    window.addEventListener("load", () => {
      load.classList.remove("load");
    });
  });
  window.addEventListener("load", () =>{
    setTimeout(() =>{
      introP.classList.add("show");
    }, 6000);
  })

  
 

  //내비게이션
  const menuIcon = document.querySelector("#menu_icon");
  const navBars = document.querySelector(".navbar");
  const navBar = document.querySelectorAll("header nav a");
  const navBg = document.querySelector(".nav_bg");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const logoBtn = document.querySelector(".logo");
  const mainDiv = document.getElementById("#banner");
  menuIcon.addEventListener("click", (e) => {
    menuIcon.classList.toggle("bx-x");
    navBars.classList.toggle("active");
    navBg.classList.toggle("active");
  });

  for (let i = 0; i < navBar.length; i++) {
    let sectionTop = sections[i].getBoundingClientRect();
    let sectionOffsetHeight = sections[i].getBoundingClientRect();

    logoBtn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    navBar[i].addEventListener("click", () => {
      window.scrollTo(0, sections[i].offsetTop - headerHeight);
    });

    navBar[0].classList.add("active");

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (
        scrollY >= sectionTop - headerHeight &&
        scrollY < sectionTop + sectionOffsetHeight && headerHeight
      ) {
        navBar[i].classList.add("active");
      } else {
        navBar[i].classList.remove("active");
      }
    });
  }
  for (let i = 0; i < navBar.length; i++) {
    let sectionTop = sections[i].getBoundingClientRect().top;
    let elementVisible = sections[i].getBoundingClientRect().height;
    let sectionOffsetHeight = sections[i].offsetHeight;
    const navbarHeight = header.getBoundingClientRect().height;

    navBar[0].classList.add("active");

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (
        scrollY >= sectionTop - headerHeight &&
        scrollY < sectionTop + sectionOffsetHeight - headerHeight
      ) {
        navBar[i].classList.add("active");
      } else {
        navBar[i].classList.remove("active");
      }
    });

    navBar[i].addEventListener("click", () => {
      window.scrollTo(
        0,
        sections[i].offsetTop - navbarHeight,
        (behavior = "smooth")
      );
    });
  }

  //intro text
 
  function introPanim(){
    introP.classList.add('show')
  };




  const $text = document.querySelector(".typing .text");

  const letters = ["WEB \n PUBLISHER"];
  const speed = 100;
  let i = 0;

  
  const changeLineBreak = (letter) => {
    return letter.map((text) => (text === "\n" ? "<br>" : text));
  };
  const typing = async () => {
    const letter = changeLineBreak(letters[i].split(""));

    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }


    await wait(3000);


    remove();
  };


  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

 
  setTimeout(typing, 4000);

  /*let content = "WEB \n PUBLISHER";
   let typing = document.querySelector(".intro_text");
   let i = 0;

   function typingText(){
    if(i < content.length)
    {
      let txt = content.charAt(i);
      typing.innerHTML += txt = "\n" ? "" : txt;
      i++
    }
   }
   setInterval(typingText,100);*/

  //scroll event
  const $body = document.querySelector("body");
  const h2 = document.querySelectorAll("section h2");
  const portfolioList = document.querySelectorAll(".portfolio .por_1dep");
  const porttext = document.querySelectorAll(".portfolio .por_1dep .text");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = document.documentElement.clientHeight;
    const bodyBottom = $body.scrollHeight;

    const options = {
      threshold: [1],
    };

    /*const textpo = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      if (entry.isIntersecting){
        entry.target.classList.add("text")
      }else{
        entry.target.classList.remove("text");
      }
    });
   })*/
   
   


    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, options);

    const option_por = {
      threshold: [0.7],
    };
    const io_por = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, option_por);

    for (let i = 0; i < h2.length; i++) {
      io.observe(h2[i]);
    }

    /*for (let i = 0; i< porttext.length; i++){
      textpo.observe(porttext[i]);
      if(i * 2 == 1){
        porttext[i].classList.add('text');
      }
    }*/

    for (let i = 0; i < portfolioList.length; i++) {
      io_por.observe(portfolioList[i]);
      if (i * 2 == 1) {
        portfolioList[i].classList.add("show");
      }
    }
    // scroll 이벤트 함수
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  });

  const backToTop = document.getElementById("backtotop");

  function checkScroll() {
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  function moveBackToTop() {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  window.addEventListener("scroll", checkScroll);
  backToTop.addEventListener("click", moveBackToTop);

  // swiper
  var swiper = new Swiper(".mySwiper", {
    // loop: true,
    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
      600: {
        slidesPerView: 2.4, //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3.8, //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 4.8, //브라우저가 1200보다 클 때
        spaceBetween: 50,
      },
    },
  });
})();
