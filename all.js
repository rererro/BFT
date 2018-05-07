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
    $(this).children("ul").hide(100);
    $(this).parent(".menu").removeClass('menu--opened');
}); 

// Onclick any other element, close all menus
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("menu")) {
        $(".menu dd ul").hide(100); 
        $(".menu").removeClass('menu--opened'); 
    } 
});



var select = $(".select");

// Onclick on a select__btn, toggle select visibility
select.find(".select__btn").click(function(e) {
    // close already opened menus
    $(".select dd ul").hide(100); 
    console.log("close opened selects");
    if (!$(e.target).parents().hasClass("select--opened")) {
        // untag all other menus, tag and open this menu
        $(this).next().children().show(100);
        $(".select").removeClass('select--opened'); 
        $(this).parent(".select").addClass('select--opened');
    } else {
        // untag this menu (already closed from above)
        $(this).parent(".select").removeClass('select--opened');
    }

});

// Click handler for select
select.find("dd ul li a").click(function() {
    var leSpan = $(this).parents(".select").find("dt a span");

    // Remove selected class
    $(this).parents(".select").find('dd a').each(function() {
        $(this).removeClass('select__selected color-theme');
        console.log("click handler");
    });

    // Update selected value
    leSpan.html($(this).html());

    // If back to default, remove selected class else addclass on right element
    if ($(this).hasClass('default')) {
        leSpan.removeClass('select__selected color-theme')
        $(this).addClass('select__selected color-theme');
    } else {
        leSpan.addClass('select__selected color-theme');
        $(this).addClass('select__selected color-theme');
    }

    // Close select
    $(this).parents("ul").hide(100);
    $(this).parents(".select").removeClass('select--opened'); 
});


// Onclick any other element, close all menus
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("select")) {
        $(".select dd ul").hide(100); 
        $(".select").removeClass('select--opened'); 
    } 
});
