$(document).ready(function(){

  var nav = $('.nav-main');

  // Change BG Nav on Scroll
  $(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
      nav.css('background', '#222222');
    } else {
      nav.css('background', 'none');
    }
  });

  $('.videos-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });

});

//Video Section Slider
