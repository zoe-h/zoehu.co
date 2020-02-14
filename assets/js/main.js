/*
 * main js
 */

$(document).ready(function () {



    $('.info-button p').click(function () {
        $('.info-panel').removeClass('hide');
    });

    $('.info-close p').click(function () {
        $('.info-panel').addClass('hide');

    });



        $('.design-motion').hover(function () {
            $('#motion').addClass('motion-effect');
        });






});
