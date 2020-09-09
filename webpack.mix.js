const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/scripts.js', 'assets/js/')
    .sass('resources/sass/styles.scss', 'assets/css/');

mix.options({
    processCssUrls: false
});

mix.browserSync({
    proxy: false,
    port: 3000,
    server: {
        baseDir: './'
    }
});