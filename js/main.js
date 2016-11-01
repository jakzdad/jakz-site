$(document).ready(function(){

  var nav = $('.nav-main');

  //menu button
  $('.menu').click(function(){
    $(this).toggleClass('menu-close');
    $('.mobile-main').toggleClass('mobile-open');
  });

  $('.mobile-main a').click(function(){
    setTimeout(function(){
      $('.mobile-main').removeClass('mobile-open');
    }, 350);
  });

  //mobile device detection
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if(isMobile.any()) {
    $('.live-container').css('background-attachment', 'initial');
    $('.lex-container').css('background-attachment', 'initial');
    $('.jackdavid-container').css('background-attachment', 'initial');
  }

  // Change BG Nav on Scroll
  $(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
      nav.css('background', '#222222');
    } else {
      nav.css('background', 'none');
    }
  });

  //Video Section Slider
  $('.videos-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //smoothScroll
  smoothScroll.init();

});
