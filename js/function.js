// 네비게이션바
$(function () {
  const $mnu = $("header > nav > .gnb > ol > li > a");

  const arrTopVal = [];
  $("article").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top;
  });

  $(window).on("scroll", function () {
    let scrollTop = Math.ceil($(this).scrollTop());

    for (let i = 0; i < $mnu.length; i++) {
      if (scrollTop >= arrTopVal[i] - 50) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      } else if (scrollTop < arrTopVal[0] - 50) {
        $mnu.parent().removeClass("on");
      }
    }
  });
});

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
