$(function () {
  // ScrollEvent
  const mainOffset = $(".main-area").offset().top;
  const s1Offset = $(".sec_01").offset().top;
  const s2Offset = $(".sec_02").offset().top;
  const s3Offset = $(".sec_03").offset().top;
  const s4Offset = $(".sec_04").offset().top;
  const s5Offset = $(".sec_05").offset().top;

  $(window).scroll(function () {
    const nowScrollTop = $(this).scrollTop();

    // section 01
    if (nowScrollTop >= mainOffset && nowScrollTop < s2Offset) {
      $(".sec_01 img").addClass("active");
      $(".sec_01 .title-area").addClass("active");
    } else {
      $(".sec_01 img").removeClass("active");
      $(".sec_01 .title-area").removeClass("active");
    }

    // section 02
    if (nowScrollTop >= s1Offset && nowScrollTop < s3Offset) {
      $(".sec_02 .farm-img").addClass("active");
    } else {
      $(".sec_02 .farm-img").removeClass("active");
    }

    if (nowScrollTop >= s2Offset && nowScrollTop < s3Offset) {
      $(".sec_02 .desc-area .desc").addClass("active");
    } else {
      $(".sec_02 .desc-area .desc").removeClass("active");
    }

    // section 03
    const s2DescOffset = $(".sec_02 .desc-area .desc").offset().top;
    const s2DescPOffset = $(".sec_02 .desc-area .desc p").offset().top;
    if (nowScrollTop >= s2DescOffset && nowScrollTop < s4Offset) {
      $(".sec_03 .desc-area").addClass("active");
    } else {
      $(".sec_03 .desc-area").removeClass("active");
    }
    if (nowScrollTop >= s2DescPOffset && nowScrollTop < s4Offset) {
      $(".sec_03 .img-area").addClass("active");
    } else {
      $(".sec_03 .img-area").removeClass("active");
    }

    // section 04
    const s3LastImgOffset = $(".sec_03 .img-area img:last-child").offset().top;
    if (nowScrollTop >= s3LastImgOffset && nowScrollTop < s5Offset) {
      $(".sec_04 .text-area").addClass("active");
    } else {
      $(".sec_04 .text-area").removeClass("active");
    }

    if (nowScrollTop >= s4Offset && nowScrollTop < s5Offset) {
      $(".sec_04 .img-area .upper-img").addClass("active");
      $(".sec_04 .img-area .lower-img").addClass("active");
    } else {
      $(".sec_04 .img-area .upper-img").removeClass("active");
      $(".sec_04 .img-area .lower-img").removeClass("active");
    }

    // section 05
    const s4ImgOffset = $(".sec_04 .img-area").offset().top;
    if (nowScrollTop >= s4ImgOffset) {
      $(".sec_05 .text-area").addClass("active");
      $(".sec_05 .img-area").addClass("active");
    } else {
      $(".sec_05 .text-area").removeClass("active");
      $(".sec_05 .img-area").removeClass("active");
    }
  });
});
