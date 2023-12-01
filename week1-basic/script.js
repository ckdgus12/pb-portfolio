window.onload = () => {
  const $header = document.querySelector("#main");
  const $navBtn = document.querySelectorAll(".navi li");
  const $section = document.querySelectorAll("section");
  const headerHeight = $header.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    let windowScrollY = window.pageYOffset;
    for (let i = 0; i < $section.length; i++) {
      let elementTop = $section[i].offsetTop;
      let elementVisble = $section[i].getBoundingClientRect().height;

      if (
        windowScrollY >= elementTop - headerHeight - 50 &&
        windowScrollY < elementTop - headerHeight - 50 + elementVisble
      ) {
        $navBtn[i].classList.add("scene");
      } else {
        $nevBtn[i].classList.remove("scene");
      }

      if (windowScrollY > headerHeight) {
        $header.classList.add("on");
      } else {
        $header.classList.remove("on");
      }
    }
  });

  $navBtn.forEach((el, idex) => {
    el.addEventListener("click", () => {
      window.scrollTo(0, $section[idex].offsetTop - $header.offsetHeight);
    });
  });
};
