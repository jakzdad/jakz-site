jQuery(function($){

  'use strict';

  $('.main-navigation a[href*="' + location.pathname + '"]').addClass('active');

  function timelineSlider() {
    $('.timeline').find('.timeline-list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      centerMode: true,
      initialSlide: 1
    });
  }

  timelineSlider();

}); //jQuery
