$(function () {
  // Section 03-04 Scroll Event
  const noticeImgOffset = $(".sec_02 .notice-area .notice").offset().top;
  const s3LastImgOffset = $(".sec_03 .img-area .last-img").offset().top;
  const s4TitleOffset = $(".sec_04 .text-area").offset().top;

  $(window).scroll(function () {
    const nowScrollTop = $(this).scrollTop();

    if (nowScrollTop >= noticeImgOffset) {
      $(".sec_03 .text-area").addClass("active");
      $(".sec_03 .img-area").addClass("active");
    } else {
      $(".sec_03 .text-area").removeClass("active");
      $(".sec_03 .img-area").removeClass("active");
    }

    if (nowScrollTop >= s3LastImgOffset) {
      $(".sec_04 .text-area").addClass("active");
      $(".sec_04 .small-img").addClass("active");
      $(".sec_04 .big-img").addClass("active");
    } else {
      $(".sec_04 .text-area").removeClass("active");
      $(".sec_04 .small-img").removeClass("active");
      $(".sec_04 .big-img").removeClass("active");
    }

    if (nowScrollTop >= s4TitleOffset) {
      $(".sec_05 article").addClass("active");
    } else {
      $(".sec_05 article").removeClass("active");
    }
  });

  // FAQ Slide Toggle
  $(".faq-accordion .title").click(function () {
    $(this).toggleClass("active");
    $(this).parent().siblings().children().removeClass("active");

    $(this).next().stop().slideToggle();
    $(this).parent().siblings().children(".desc").slideUp();
  });
});
