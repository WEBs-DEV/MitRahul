$(document).ready(function () {
  $("#header-section").load("real-state-header.html");
  $("#service-slider-section").load("service-slider.html");
  $("#photo-gallery-section").load("photo-gallery.html");
  $("#contact-form-section").load("contact-form.html");
  $("#footer-section").load("footer.html");
});

// aos animation scroll initializing for on load scrolling
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 50, // offset (in px) from the original trigger point
  // values from 0 to 3000, with step 50ms
  delay: 1000,
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});

// area section

let tabLink = document.querySelector("#tab-links");

tabLink.addEventListener("click", function (e) {
  let tabId = e.target.id;
  let contEle = document.querySelectorAll(".tab-content");
  let contLen = contEle.length;
  for (let x = 0; x < contLen; x++) {
    contEle[x].classList.add("hide-content");
  }
  document.querySelector("#content-" + tabId).classList.remove("hide-content");

  let tabEle = document.querySelectorAll(".tab");
  let tabLen = tabEle.length;
  for (let y = 0; y < tabLen; y++) {
    tabEle[y].classList.add("non-active-tab");
  }
  document.querySelector("#" + tabId).classList.remove("non-active-tab");
});
