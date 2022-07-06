$(function () {
  $(".slide-con").slick({
    // dots: li 형태로 버튼을 만들어줌
    // dots: true,
    arrows: true,
    prevArrow: $(".left-btn"),
    nextArrow: $(".right-btn"),
    slidesToShow: 3,
    slidesToScroll: 3, // 한번에 슬라이드 시킬 아이템 개수
    // centerMode: true,
    // variableWidth: 내가 정한 width 로 넣어줌
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover: true,
    // focusOnSelect: 내가 클릭한 slide 로 즉시 이동
    // focusOnSelect: true,
    vertical: false,
    // initialSlide: 원하는 slide 부터 시작
    initialSlide: 0,
  });
});
