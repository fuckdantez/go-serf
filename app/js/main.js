$(function() {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left slick-arrow" alt="" style="" src="images/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right slick-arrow" alt="" style="" src="images/arrows-right.svg">',
        asNavFor: '.slider-dotshead',
    });
    $('.slider-dotshead').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         asNavFor: '.header__slider',
    });
$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left slick-arrow" alt="" style="" src="images/arrows-left.svg">',
    nextArrow: '<img class="slider-arrows slider-arrows__right slick-arrow" alt="" style="" src="images/arrows-right.svg">',
   asNavFor: '.slider-map',
})
 $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.surf-slider',
    focusOnSelect:true,
})
$('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left slick-arrow" alt="" style="" src="images/arrows-left.svg">',
    nextArrow: '<img class="slider-arrows slider-arrows__right slick-arrow" alt="" style="" src="images/arrows-right.svg">',
})
});
