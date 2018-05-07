'use strict';


var menu = $(".menu");

// Onclick on a menu button, toggle menu visibility
menu.find(".menu__btn").click(function(e) {
    // close already opened menus
    $(".menu dd ul").hide(100); 
    console.log("close opened menus");
    if (!$(e.target).parents().hasClass("menu--opened")) {
        // untag all other menus, tag and open this menu
        $(this).next().children().show(100);
        $(".menu").removeClass('menu--opened'); 
        $(this).parent(".menu").addClass('menu--opened');
    } else {
        // untag this menu (already closed from above)
        $(this).parent(".menu").removeClass('menu--opened');
    }
});

// Onclick on a menu item, close menu
menu.find("dd").click(function() {
    // Close dropdown
    $(this).children("ul").hide(100);
    $(this).parent(".menu").removeClass('menu--opened');
}); 

// Onclick any other element, close all menus
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("menu")) {
        $(".menu dd ul").hide(100); 
    } 
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