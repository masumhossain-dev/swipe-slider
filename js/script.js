var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1380: {
      slidesPerView: 4,
    },
    1810: {
      slidesPerView: 5,
    },
  },
});