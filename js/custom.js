

$(document).ready(function(){

  // Click "Hit" button to open hit options
  $('.selection-hit').click(function(){
    $('.hit-buttons').addClass('hit-buttons-show');
  });

  // Click to hide any options menu
  $('.hide').click(function(){
   $('.hit-buttons').removeClass('hit-buttons-show');
 });


  $('.hit-buttons button').click(function(e){
    //Target of the hit selections buttons
    var target = $(event.target);

    // Class for each base
    var single = $('.first');
    var double = $('.second');
    var triple = $('.third');
    var homerun = $('.home');

    //Bases Array
    var bases = [
      '.base .first',
      '.base .second',
      '.base .third',
      '.base .home',
    ]

    //Hit buttons array
    var hitType = [
      'hit-buttons button .single',
      'hit-buttons button .double'
    ]

    //Scoring Increase Variable
    var points = $('.point input').val();

    // if "single" button is pressed
    if (target.hasClass('single') || target.hasClass('walk') || target.hasClass('hbp')) {
      single.addClass('hit');
      $('.hit-buttons').removeClass('hit-buttons-show');
    }

    // if "double" button is pressed
    if (target.hasClass('double')) {
      double.addClass('hit');
      $('.hit-buttons').removeClass('hit-buttons-show');
    }
    // if "triple" button is pressed
    if (target.hasClass('triple')) {
      triple.addClass('hit');
      $('.hit-buttons').removeClass('hit-buttons-show');
    }
    // if "homerun" button is pressed, also adds 1 to the score
    if (target.hasClass('homerun')) {
      homerun.addClass('hit');
      $('.hit-buttons').removeClass('hit-buttons-show');
      points++;
      $('.point input').val(points);
    }

    // if "reset" button is pressed take all men off base
    for (var i = 0; i < bases.length; i++) {
      $('.reset').click(function(){
        $('.score .base').removeClass('hit');
      });
    }

    // =====================
    // Advance button
    // =====================

    $('.selection-advance').click(function(){
      var currentBase = $('.score .hit');
      var nextBase = currentBase.next();
      var single = $('.first');
      var double = $('.second');
      var triple = $('.third');
      var homerun = $('.home');

      nextBase.addClass('hit');
      currentBase.removeClass('hit');

      if (!nextBase.hasClass('hit')) {
        alert("You don't have any runners to advance.");
      }

      if (currentBase.is(triple)) {
        points++;
        $('.point input').val(points);
      }
    });

  });

});
