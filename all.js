'use strict';


// Slider
$(function() {
    // slider configuration
    var sliderWidth = 700;
    var sliderSpeed = 1000;
    var sliderPause = 2000;
    var currentslide = 1;

    // cache Dom
    var slider = $('.slider');
    var slides = slider.find('.slides');
    var slide = slides.find('.slide');
    var interval = setInterval(function() {
        slides.animate({"margin-left": '-='+sliderWidth},sliderSpeed,function()
            {
                currentslide++;
                if (currentslide === slide.length) {
                    currentslide = 1;
                    slides.css('margin-left','0')
                }
            }
        );
        console.log(currentslide);
    }, sliderPause);
});


current slide
prev slide next slide display
others display none