let mix = require('laravel-mix');

mix.setPublicPath('public_html')
   .js('source_files/js/script.js', 'public_html/js')
   .sass('source_files/sass/style.scss', 'public_html/css')
   .options({
      processCssUrls: false
   });
