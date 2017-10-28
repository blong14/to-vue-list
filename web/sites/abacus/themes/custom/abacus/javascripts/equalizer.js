
(function ($, Drupal) {
  'use strict';

  $(document).ready(function() {
    equalize();  
  });


  function equalize(){
    var heights = $('.js-equalize').map(function() {
      return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".js-equalize").height(maxHeight);
  }

})(jQuery, Drupal);
