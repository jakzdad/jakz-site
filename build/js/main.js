jQuery(function($) {

  'use strict';

  // Global Variables
  // use $ when defining global variables -> var $example = $('.example');
  var HOME = {};
  var GLOBAL = {};

  var $year = new Date().getFullYear();
  var $isHome = $('.home').length;

  // Home Page Specific Scripts
  HOME = {
    run: function() {
      this.justTesting();
    },

    //Define Functions Below
    justTesting: function() {
      console.log('home');
    }
  };

  //Call all functions inside home run function
  HOME.run();

  //Global Scripts
  GLOBAL = {
    run: function() {
      this.getCurrentYear();
    },

    //Add current year in footer to not have to worry about it..ever
    getCurrentYear: function() {
      $('.legal').find('.current-year').html($year);
    },

    currentPage: function() {
      //make sure to add you main navigation class here.
      $('.main-navigation a[href*="' + location.pathname + '"]').addClass('active');
    }
  };

  //Call all functions inside Gloal run function
  GLOBAL.run();

}); //end jquery
