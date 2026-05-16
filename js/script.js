const mainSwiper = new Swiper(".banner_wrap .slide_mask", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

});

const bestSwiper = new Swiper(".best_wrap .slide_mask", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    326: {
        slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});