// 스와이퍼
const swiper1 = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
