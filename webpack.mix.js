let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public_html')
   .js('assets/js/landing.js', 'public_html/js')
   .sass('assets/sass/landing.scss', 'public_html/css')
   .copyDirectory('assets/images', 'public_html/images')
   .copyDirectory('assets/fonts', 'public_html/fonts')
   .options({
      processCssUrls: false
   });
