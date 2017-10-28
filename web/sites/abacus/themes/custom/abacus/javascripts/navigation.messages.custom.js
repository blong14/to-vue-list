(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.navigation = {
    attach: function (context, settings) {
      if (settings.navigation && settings.navigation.messageCount > 0) {
        var count = $('<span class="abacus--message-count ml-2">' + settings.navigation.messageCount + '</span>');

        $("a[href$='/dashboard']").append(count);
      }
    }
  };

})(jQuery, Drupal);