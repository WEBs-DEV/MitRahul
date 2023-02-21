$(document).ready(function () {
  $("#header-section").load("index-header.html");
  $("#footer-section").load("footer.html");
});

$(document).ready(function () {
  $('.logo-area').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }]

  });
});

// aos animation scroll initializing for on load scrolling
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  // values from 0 to 3000, with step 50ms
  delay: 500,
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
