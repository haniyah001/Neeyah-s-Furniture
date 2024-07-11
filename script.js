"use strict";

const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 120) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const navbarBtn = document.querySelector(".sidebar_btn");
const mobileSlider = document.querySelector(".mobile_slider");
const cancelSlider = mobileSlider.querySelector("button");

navbarBtn.addEventListener("click", function () {
  mobileSlider.classList.remove("hidden");
});

cancelSlider.addEventListener("click", function () {
  mobileSlider.classList.add("hidden");
});
