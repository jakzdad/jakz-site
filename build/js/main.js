jQuery(function($) {

  'use strict';

  var $zwsId = 'X1-ZWz19awn21c6iz_anh8k';
  var $dataURL = 'http://www.zillow.com/webservice/';

  //calls
  var $getSearchResults = 'GetSearchResults.htm?';

  //Parameters
  var $params = {
    apiKey: 'zws-id',
    address: '',
    citystatezip: '',
    rentzestimate: ''
  };

  function test() {
    var getAddress = $('#address').val();
    var urlEncodedAddress = getAddress.split(' ').join('+');
    var city = $('#city').val();
    var state = $('#state').val();
    var urlEncodedCityStateZip = city + '%2C+' + state;

    return ($dataURL + $getSearchResults + 'zws-id=' + $zwsId + '&' + 'address=' + urlEncodedAddress + '&citystatezip=' + urlEncodedCityStateZip);
  }

  $('#submit').on('click', function(){
    test();
    console.log(test());

    var here = test();


    $.ajax({
      type: 'GET',
      url: here,
      crossDomain: true,
      dataType: 'xml',
      success: function(info) {

         var parse = $.parseXML(info);
        console.log(parse);
      }

    });

  });


}); //end jquery
