var swiper = new Swiper(".slide-content", {
  spaceBetween: 5,
  loop: true,
  centerSlider:false,
  grabCursor: "true",
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});
