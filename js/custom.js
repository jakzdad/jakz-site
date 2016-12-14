// ==========================================================
// Global Variables
// ==========================================================

// Class for each base
var single = $('.first');
var double = $('.second');
var triple = $('.third');
var homerun = $('.home');
//Scoring Increase Variable
var points = $('.point input').val();
//Bases Array
var bases = [
  '.base .first',
  '.base .second',
  '.base .third',
  '.base .home',
]

var currentBase = $('.score .hit');
var nextBase = $('.score .hit + .base');
var prevBase = currentBase.prev();

// ==========================================================
// Click "Hit" button to open hit options
// ==========================================================


$('.selection-hit').click(function(){
  $('.hit-buttons').addClass('hit-buttons-show');
});
// ==========================================================
// Click to hide any options menu
// ==========================================================

$('.hide').click(function(){
 $('.hit-buttons').removeClass('hit-buttons-show');
});

// ===========================================================================
// Click "reset" button to hide hit options, will also remove men from bases
// ===========================================================================

$('.reset').click(function(){
  $('.hit-buttons').removeClass('hit-buttons-show');
});
// ==========================================================
// if "reset" button is pressed take all men off base
// ==========================================================

for (var i = 0; i < bases.length; i++) {
  $('.reset').click(function(){
    $('.score .base').removeClass('hit');
  });
}

// ==========================================================
// Choosing the Type of at-bat
// ==========================================================

$('.hit-buttons button').click(function(e){
  //Target of the hit selections buttons
  var target = $(event.target);

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

});

// ==========================================================
// Advance button
// ==========================================================

$('.selection-advance').click(function(e){
  var currentBase = $('.score .hit');
  var nextBase = $('.score .hit + .base');
  var prevBase = currentBase.prev();

  nextBase.addClass('hit');

  if (nextBase.is($('.home'))) {
    $('.selection-score').css('display', 'block');
    $('.selection-advance').hide();
  }

});

$('.selection-score').click(function(){
  points++;
  $('.point input').val(points);
  $('.selection-score').css('display', 'none');
  $('.selection-advance').show();
  $('.score .base').removeClass('hit');


});
