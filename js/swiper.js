var swiper = new Swiper(".mySwiper", {

    breakpoints: {
        1160: {
            slidesPerView: 5.2,
            spaceBetween: 10,
        },
        920: {
            slidesPerView: 4.2,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 3.2,
            spaceBetween: 10,
        },
        460: {
            slidesPerView: 2.2,
            spaceBetween: 10 
        },
        300: {
            slidesPerView: 1.2,
            spaceBetween: 10
        }
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  });