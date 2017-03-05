jQuery(function($){

  'use strict';

  $('.main-navigation a[href*="' + location.pathname + '"]').addClass('active');

  var openMenu = $('.open-menu');
  var closeMenu = $('.close-menu');
  var header = $('header');
  var body = $('body');
  var main = $('body').find('main');
  var win = $(window);
  var width = win.width();


  function handleLayout() {
    if ($(window).width() < 900) {
      header.addClass('closed');
      main.addClass('menu-closed');
    } else {
      header.removeClass('closed');
      main.removeClass('menu-closed');
    }
  }

  function contactForm() {
    $('.contact-link').on('click', function(e){
      e.preventDefault();
      $('.contact-form').toggleClass('contact-open');
    });

    $('.close-contact').on('click', function(){
      $('.contact-form').removeClass('contact-open');
    });
  }



  handleLayout();

  $(document).on('load', function() {

  });

  $(document).ready(function() {
    console.log('document is ready');

    contactForm();

    closeMenu.on('click', function() {
      header.toggleClass('closed');
      main.addClass('menu-closed');
    });


    openMenu.on('click', function() {
      header.removeClass('closed');
      main.removeClass('menu-closed');

    });

  });



  $(window).resize(function(){
    var win = $(this);
    var width = win.width();
    handleLayout();
  });

}); //jQuery
