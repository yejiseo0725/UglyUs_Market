$(function () {
    // 반응형 햄버거 버튼 on/off
    $(".hamburger_icon").click(function () {
        $(".hamburger-popup-inner").addClass("on");
        $(".hamburger-popup").addClass("on");
    });

    $(".popup-close img").click(function () {
        $(".hamburger-popup-inner").removeClass("on");
        $(".hamburger-popup").removeClass("on");
    });

    $(".hamburger-popup .hidden-nav li").mouseenter(function () {
        $(this).css({
            opacity: "1",
        });
        $(this).siblings().css({
            opacity: "0.5",
        });
    });
    $(".hamburger-popup .hidden-nav li").mouseleave(function () {
        $(this).siblings().css({
            opacity: "1",
        });
    });
});