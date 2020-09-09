try {

    window.Popper = require('popper.js').default;

    window.$ = window.jQuery = require('jquery');

    require('bootstrap');

    require('./common-components/lazy-load');

} catch (e) {
    console.log(e);
}
