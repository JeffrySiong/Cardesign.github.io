const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");
const header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

window.addEventListener("scroll", () => {
  header.classList.toggle("show-header", scrollY > 0);
});

// SWIPERJS
let swiper = new Swiper(".int__container", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".ext__container", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// OVERALL

const overallContent = document.querySelectorAll(".overall__content");
const icon = document.querySelectorAll(".iconic");

function changeContent(index) {
  overallContent.forEach((all) => all.classList.remove("active"));
  icon.forEach((ic) => ic.classList.remove("active"));

  overallContent[index].classList.add("active");
  icon[index].classList.add("active");
}

icon.forEach((ic, index) =>
  ic.addEventListener("click", () => {
    changeContent(index);
  })
);

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});
sr.reveal(".sect__title, .overall__icon");

sr.reveal(".home__title", { delay: 600, origin: "left" });
sr.reveal(".home__subtitle", { delay: 700, origin: "left" });
sr.reveal(".home__button", { delay: 800, origin: "left" });
sr.reveal(".spec__image", {
  delay: 900,
  origin: "left",
});
sr.reveal(".spec__gsap", { delay: 1000, interval: 200, origin: "top" });
sr.reveal(".footer__social a, .footer__terms a, .footer__subtitle", {
  interval: 100,
  origin: "left",
});
