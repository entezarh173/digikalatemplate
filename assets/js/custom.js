let searchTopBox = document.querySelector(".search-top-box");
let searchBox = document.querySelector(".search-box");
let searchInputTop = document.querySelector(".search-input-top");
let cover = document.querySelector(".cover");
let categoryMenu = document.querySelector(".category-menu");
let categoryMenuList = document.querySelector(".category-menu-list");

searchTopBox.addEventListener("click", (event) => {
  searchBox.classList.add("active");
  cover.classList.add("active");
});
cover.addEventListener("click", (event) => {
  searchBox.classList.remove("active");
  cover.classList.remove("active");
});

categoryMenu.addEventListener("mousemove", () => {
  categoryMenuList.style.display = "block";
  document.body.style.overflow = "hidden";
});

categoryMenu.addEventListener("mouseleave", () => {
  categoryMenuList.style.display = "none";
  document.body.style.overflow = "auto";
});

//slider swiper
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: "<>",
    autoplay: true,
    autoplayTimeout: 7000,
  });
});
let elem = document.querySelector(".slider");
elem.addEventListener("mousemove", () => {
  document.querySelector(".owl-nav").classList.add("active");
});
elem.addEventListener("mouseleave", () => {
  document.querySelector(".owl-nav").classList.remove("active");
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 7,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
  },
});

const swiper_Proposal = new Swiper(".swiper_proposal", {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 7,
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 7,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
  },
});
const swiper_baner = new Swiper(".swiper_baner", {
  speed: 400,
  spaceBetween: 0,
  breakpoints: {
    1200: {
      slidesPerView: 10,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".brand .swiper-button-next",
    prevEl: ".brand .swiper-button-prev",
  },
});
