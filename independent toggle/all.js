'use strict';


// popup


var pop = $(".pop");
var popBg = $(".pop__bg");
var popFloat = $(".pop__float");


popBg.click(function() {
    pop.addClass('pop--hide');
});

popFloat.click(function() {
    pop.removeClass('pop--hide');
});