(function() {
  burger();

  ////////slider
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.querySelectorAll(".hero__slide");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
  }

  ///burger-menu

  function burger() {
    let menu = document.querySelector(".mob-menu");
    let openbtn = document.querySelector(".js-burger-open");
    let closebtn = document.querySelector(".js-burger-close");

    openbtn.addEventListener("click", show);
    closebtn.addEventListener("click", hide);

    function show() {
      this.classList.remove("burger--visibility");
      menu.style.transform = "translate(0)";
    }

    function hide() {
      openbtn.classList.add("burger--visibility");
      menu.style.transform = "translate(500%)";
    }
  }
})();
