// 네비게이션바
$(function () {
  const $nav = $("header > nav");
  const $mnu = $nav.find(".gnb > li > a");

  // 메뉴 클릭시 이동
  $mnu.click(function (evt) {
    preventDefault(evt);
    $("html, body").animate({ scrollTop: $(this.hash).offset.top });
  });

  // 배열구성
  const arrTopVal = [];
  $(".sect").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top;
  });

  // 스크롤
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

// 스틸컷 스와이퍼(1)
const swipepStill = new Swiper(".swiper-1", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  effect: "cards",
  cards: { perSlideOffset: 3 },
});

// 캐릭터 스와이퍼(2)
const swipepChar = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,

  effect: "fade",
  fadeEffect: { crossFade: true },
});
