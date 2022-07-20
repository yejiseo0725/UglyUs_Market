$(function () {

    // Main Slide 
    $(".slide-area").slick({
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
    })

});