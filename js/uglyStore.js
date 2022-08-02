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
  });
});
