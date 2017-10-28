FROM wodby/drupal-php:5.3-2.4.3

WORKDIR /var/www/html

ENV PATH "/var/www/html/vendor/bin:$PATH"

COPY composer.json /var/www/html/composer.json
COPY composer.lock /var/www/html/composer.lock

RUN composer install

COPY ./drush /var/www/html/drush
COPY ./web/sites/abacus /var/www/html/web/sites/abacus
COPY ./web/sites/sites.php /var/www/html/web/sites/sites.php

RUN mkdir -p web/sites/default/files \
             web/sites/abacus/files; \
    chown -R www-data:www-data web/sites; \
    chmod -R ug+rw web/sites