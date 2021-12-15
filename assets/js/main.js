$(function(){
    $(".hamburger").click(function(){
        $(".nav-menu").toggleClass("active");
        $(".hamburger").toggleClass("active");
    });

    $(".nav-menu").click(function () {
        $(".nav-menu").removeClass("active");
        $(".hamburger").removeClass("active");
    });
});