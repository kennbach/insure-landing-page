"use strict";

// Get the hamburger-menu__img
const img = document.getElementById("hamburger-menu__img");
// Get the hamburger-menu__nav
const nav = document.getElementById("hamburger-menu__nav");

// Add event listener to img
img.addEventListener("click", function () {
  // Toggle active class for the hamburger-menu__img
  this.classList.toggle("hamburger-menu__img--active");
  // Toggle the nav menu
  nav.classList.toggle("hamburger-menu__nav--active");
});
