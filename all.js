'use strict';


var menu = $(".menu");

// Onclick on a menu button, toggle menu visibility
menu.find(".menu__btn").click(function(e) {
    // close already opened menus
    $(".menu dd ul").hide(100); 
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
    // close already opened select
    $(".select dd ul").hide(100); 
    console.log("close opened selects");
    if (!$(e.target).parents().hasClass("select--opened")) {
        // untag all other select, tag and open this select
        $(this).next().children().show(100);
        $(".select").removeClass('select--opened'); 
        $(this).parent(".select").addClass('select--opened');
    } else {
        // untag this select (already closed from above)
        $(this).parent(".select").removeClass('select--opened');
    }

});

// Click handler for select
select.find("dd ul li a").click(function() {
    var selectValue = $(this).parents(".select").find(".select__btn a span");

    // Update selected marker
    $(this).parents(".select").find('ul a').each(function() {
        $(this).removeClass('select--selected color-theme');
    });
    $(this).addClass('select--selected color-theme');

    // Update select__btn value
    selectValue.html($(this).html());

    // Close select
    $(this).parents("ul").hide(100);
    $(this).parents(".select").removeClass('select--opened'); 
});


// Onclick any other element, close all selects
$(document).bind('click', function(e) {
    if (!$(e.target).parents().hasClass("select")) {
        $(".select dd ul").hide(100); 
        $(".select").removeClass('select--opened'); 
    } 
});


// tabs

$(document).ready(function() {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);

});