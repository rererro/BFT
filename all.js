'use strict';


var menu = $(".menu");

// Onclick on a menu__btn, toggle dropdown visibility
menu.find(".menu__btn").click(function() {
    $(this).next().children().toggle(100);
    console.log("toggle menu");
});

// Close all menu onclick on another element
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("menu")) $(".menu dd ul").hide(100);
});


var dropdown = $(".dropdown");

// Onclick on a dropdown__btn, toggle dropdown visibility
dropdown.find(".dropdown__btn").click(function() {
    $(this).next().children().toggle(100);
    console.log("toggle dropdown");
});

// Click handler for dropdown
dropdown.find("dd ul li a").click(function() {
    var leSpan = $(this).parents(".dropdown").find("dt a span");

    // Remove selected class
    $(this).parents(".dropdown").find('dd a').each(function() {
        $(this).removeClass('toolbar__selected');
        console.log("click handler");
    });

    // Update selected value
    leSpan.html($(this).html());

    // If back to default, remove selected class else addclass on right element
    if ($(this).hasClass('default')) {
        leSpan.removeClass('toolbar__selected')
    } else {
        leSpan.addClass('toolbar__selected');
        $(this).addClass('toolbar__selected');
    }

    // Close dropdown
    $(this).parents("ul").hide(100);
    console.log("close dropdown");
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide(100);
});