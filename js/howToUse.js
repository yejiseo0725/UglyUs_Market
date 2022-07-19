$(function () {
    
    // FAQ Slide Toggle
    $(".faq-accordion .title").click(function () {
        $(this).toggleClass("active");
        $(this).parent().siblings().children().removeClass("active");

        $(this).next().stop().slideToggle();
        $(this).parent().siblings().children(".desc").slideUp();
    });

});