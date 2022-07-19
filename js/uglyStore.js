$(function () {

    $(".slide-area").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".left-btn"),
        nextArrow: $(".right-btn"),
        variableWidth: true,
        slidesToShow: 1,
    });

});