$(document).ready(function(){
    $('.carousel-track').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.carousel-button.prev',
        nextArrow: '.carousel-button.next',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});