var swiper = new Swiper(".slide-content", {
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
