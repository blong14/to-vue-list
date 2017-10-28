(function($) {
  'use strict';

  // Custom AJAX commands
  if(typeof Drupal.ajax != "undefined") {
    
    Drupal.ajax.prototype.commands.reloadPage = function(ajax, rsp, status) {
      location.reload();
    };

    Drupal.ajax.prototype.commands.milestoneNotification = function(ajax, rsp, status) {
      
      var notified = $('.js-milestone-notification');

      if (!notified.length) {
        var notifier = $('<i class="glyphicon glyphicon-info-sign ml-1 js-milestone-notification"></i>');

        $("a[href$='/milestones']").append(notifier);
      }
    }
  }
})(jQuery);