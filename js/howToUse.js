$(function () {
    
    $(".faq-accordion .title-box").click(function () {
        $(this).addClass("active")
        $(this).next().addClass("active");

        $(this).parent().parent().children(".title-box").removeClass("active");

        $(this).siblings(".desc").stop().slideToggle();
        $(this).parents().children(".desc").stop().slideUp();
    });





});