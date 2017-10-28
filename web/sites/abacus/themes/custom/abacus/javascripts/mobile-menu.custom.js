(function ($, Drupal) {
    'use strict';
  
    $(document).ready(function() {
      menuToggle();  
    });
    
    function menuToggle(){
      var trigger = '.abacus--nav-toggle';
      var menu = '.abacus--nav';

      $(trigger).click(function() {
          $(menu).toggleClass('is-open');
          $(trigger + ' span').toggleClass('glyphicon-menu-hamburger').toggleClass('glyphicon-remove');
      });
    }
  
  })(jQuery, Drupal);
  