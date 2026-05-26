const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

  if(window.scrollY > 50){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
});

const mainSwiper = new Swiper(".banner_wrap .slide_mask", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".pagi",
  },
});

const bestSwiper = new Swiper(".best_wrap .slide_mask", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    326: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});