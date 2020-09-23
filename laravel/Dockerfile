FROM composer:latest as builder

WORKDIR /app

RUN composer global require hirak/prestissimo --no-plugins --no-scripts

COPY composer.* ./

RUN composer install \
    --ignore-platform-reqs \
    --no-plugins \
    --no-scripts \
    --no-dev \
    --prefer-dist \
    --no-autoloader
#    && rm -rf /root/.composer

FROM php:7.4-fpm

WORKDIR /srv

COPY . /srv
COPY --from=builder /app/vendor /srv/vendor
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    #    libcurl4-openssl-dev \
    zip \
    unzip

RUN composer dump-autoload --no-scripts --no-dev --optimize

RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd intl zip
#RUN docker-php-ext-install curl

RUN pecl install redis && docker-php-ext-enable redis

EXPOSE 9000

CMD ["php-fpm"]
