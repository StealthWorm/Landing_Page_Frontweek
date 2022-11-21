// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const buttonLink = document.querySelector("#link-to-header");
const allLinks = [...desktopLinks, ...mobileLinks, buttonLink];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop; //onde o elemento começa

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    buttonLink.style.display = "block";
  } else {
    buttonLink.style.display = "none";
  }
}

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

dots.forEach((d) => {
  d.addEventListener("click", clickDots);
});

function clickDots() {
  for (let i = 0; i < slides.length; i++) {
    if (dots[i] === this) {
      slideIndex = i;
    }

    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

// Inicialização
showSlides();

ScrollReveal().reveal('#header', {delay: 500});
ScrollReveal().reveal('#about', {delay: 500});
ScrollReveal().reveal('#testimonials', {delay: 500});
ScrollReveal().reveal('#team', {delay: 500});
ScrollReveal().reveal('#contact', {delay: 500});
ScrollReveal().reveal('#footer', {delay: 500});