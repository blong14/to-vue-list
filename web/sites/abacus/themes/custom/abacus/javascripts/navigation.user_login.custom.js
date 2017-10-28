(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.login = {
    attach: function (context, settings) {
      if (!settings.login) {

        var adminBtn = $('<a href="javascript:;" class="btn-block mt-5">Admin Login</a>'),
            cancelBtn = $('<a href="javascript:;" class="mr-3">Cancel</a>'),
            shib = $('#shib_login_url'),
            userLogin = $('#user-login');

        cancelBtn.click(function(e) {
          $('.form-item, .form-actions').hide();
          userLogin.toggleClass('text-center');
          adminBtn.fadeToggle(500).show();
          shib.fadeToggle(500).show();
        });

        adminBtn.click(function(e) {
          shib.hide();
          adminBtn.hide();
          $('#edit-actions').prepend(cancelBtn);
          userLogin.toggleClass('text-center');
          $('.form-item, .form-actions').fadeToggle(500).show();
        });

        // Only alter the main login page
        if (!$('body').hasClass('page-user-password')) {
          $('.form-item, .form-actions').hide();
          $('#shib_login_url a').addClass('btn btn-primary btn-lg');

          if (!shib.length) {
            // Quick and dirty way to handle our different environments
            adminBtn.css({'display': 'block'});
            userLogin.append(adminBtn);
          } else {
            shib.append(adminBtn);
          }

          // Finally, show the form
          userLogin.addClass('text-center').show();
        }
      }
    }
  };

})(jQuery, Drupal);