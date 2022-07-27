$(function () {

  // Section2 이들이 못난이가 된 사연  
  $(".slide-con").slick({
    arrows: true,
    prevArrow: $(".left-btn"),
    nextArrow: $(".right-btn"),
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    vertical: false,
    initialSlide: 0,
  });

  let imgIndex;
  $(".small").click(function () {
    // small-box 에 border 넣기
    $(this).addClass("active").siblings().removeClass("active");
    
    // small-list index 에 맞춰서 main-img 변화
    const smallImgIndex = $(this).children().attr("src");
    $(".main-box").children().attr("src", smallImgIndex);
  });

  // Small-box 에 맞추어 text 변화
  $(".small-box2").click(function () {
    $(".desc-jumbo").removeClass("on").siblings().addClass("on");
  });
  $(".small-box1").click(function () {
    $(".desc-standard").removeClass("on").siblings().addClass("on");
  });

  // $(".section_03 .section-inner").css("border", "3px solid royalblue");

  const main_title_offset = parseInt($(".main .visual .main-title").offset().top);
  const sec3_title_offset = parseInt($(".section_03 .title-area h3").offset().top);
  $(window).scroll(function () {

    const scrollTopLocation = parseInt($(this).scrollTop());

    // Fixed area 
    if (scrollTopLocation > main_title_offset) {
      $(".fixed-area").css({
        position: "fixed",
      });
    } else {
      $(".fixed-area").css({
        position: "absolute",
      });
    };

    // Fixed-area Top btn
    // $(".fixed-area .top-btn").click(function () {
      
    // });

    // Section 03 Animation
    if (scrollTopLocation >= sec3_title_offset) {
      $(".intro-cards .card").addClass("active");
    } else {
      $(".intro-cards .card").removeClass("active");
    }


  });


});
