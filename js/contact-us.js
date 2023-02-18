$(document).ready(function () {
    $("#header-section").load("header.html");
    $("#footer-section").load("footer.html");
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