$(function () {
  const mainSlide = $(".slide-area");

  let $currentSlide;

  mainSlide.on("init", function (event, slick) {
    $currentSlide = slick.currentSlide;

    $(".desc").eq($currentSlide).addClass("active");
  });

  mainSlide.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $currentSlide = slick.currentSlide;

    $(".desc").removeClass("active").eq($currentSlide).addClass("active");
  });

  // Main Slide
  mainSlide.slick({
    dots: true,
    arrows: true,
    prevArrow: $(".left-btn"),
    nextArrow: $(".right-btn"),
    variableWidth: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
  });

  // Section 01 Slide
  $(".slide-articles").slick({
    dots: true,
    arrows: true,
    prevArrow: $(".left-ant"),
    nextArrow: $(".right-ant"),
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      // 반응형 적용여부
      {
        breakpoint: 771, //해상도 브레이크 포인트 설정
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 800,
          speed: 1000,
        },
      },
    ],
  });

  // Section 02 Scroll Event
  const s2TitleOffset = $(".sec_02 .title-area h2").offset().top;
  console.log(s2TitleOffset);

  $(window).scroll(function () {
    const scrollTopLocation = $(this).scrollTop();

    if (scrollTopLocation >= s2TitleOffset) {
      $(".a5 h3").css({
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
      });

      $(".a5 .more-review-btn").css({
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
      });
    }
  });

  // Section 03 Filter
  $(".filter .f-btn").click(function () {
    // filter btn color 변경
    $(this).addClass("active").siblings().removeClass("active");

    // 다 나오게
    $(".veggie").css({
      display: "block",
    });
    $(".fruit").css({
      display: "block",
    });
  });

  // 과일만 나오게
  $(".filter .fruit-btn").click(function () {
    $(".veggie").css({
      display: "none",
    });
    $(".fruit").css({
      display: "",
    });
  });

  // 채소만 나오게
  $(".filter .veggie-btn").click(function () {
    $(".fruit").css({
      display: "none",
    });
    $(".veggie").css({
      display: "",
    });
  });
});
