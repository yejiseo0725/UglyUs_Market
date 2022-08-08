$(function () {
  // Main Slide
  $(".slide-box").slick({
    dots: false,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1300,
    infinite: true,
    pauseOnHover: false,
    centerMode: true,
  });

  // Banner count
  const bannerText = parseInt($(".banner .score-box2").text());
  console.log(bannerText);

  const count = 0;
  // setInterval(function () {
  //   count++;
  //   if (count >= bannerText) {
  //     clearInterval();
  //   } else {
  //     $(".banner .score-box2").text(count);
  //   }
  // }, 1000);
});
