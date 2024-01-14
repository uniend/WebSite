

const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const pagingSwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
});

Swiper.controller.control = pagingSwiper;