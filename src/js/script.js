$(document).ready(function () {
    $('.rev_slider').slick({
        dots:false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    })
    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
        console.log(value);
    });
})