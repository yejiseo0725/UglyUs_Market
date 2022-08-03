$(function () {
  // Main Slide
  $(".slide-box").slick({
    dots: false,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    infinite: true,
    pauseOnHover: false,
    centerMode: true,
  });
});
