/*$(document).ready(() =>{
    $('.mouth').animate({
        'margin-bottom': '50px',
        'width': '40px',
        'height': '27px',
        '-webkit-animation': 'grow 0s 1s 1 ease',
        'width': '2px',
        'height': '40px',
        '-webkit-animation': 'grow 0s 1s 1 ease',
        'width': '40px',
        'height': '27px',
        '-webkit-animation': 'grow 0s 1s 1 ease'
    }, 5000)
    }
),*/

vow = ["a","e","i","o","u"];
(function animate_mouth($) {
    console.log("hlaa")
    chain = "Hola mi nombre es chati"; 
    // flag= true;
    for (let c of chain){
        str_process(c).delay(3);        
    };
    $body = $("body");
},
str_process = ($any) => {
    if ($any in vow){
        $(".mouth").addClass("mouth-move-1");
        $(".mouth").removeClass("mouth");
        $(".mouth").removeClass("mouth-move-1");
        $(".mouth").addClass("mouth-move-4");
    } else {
        $(".mouth").addClass("mouth-move-2");
        $(".mouth").removeClass("mouth-move-2");
        $(".mouth").addClass("mouth-move-3");
    }
}
)(jQuery);
/*
(function ($) {
    var altura = $(".header").offset().top;
  
    var $window = $(window).on("scroll", function () {
        if ($(window).scrollTop() > altura) {
          $(".header").addClass("header-menu-fixed");
        } else {
          $(".header").removeClass("header-menu-fixed");
        }
      }),
      $body = $("body");*/