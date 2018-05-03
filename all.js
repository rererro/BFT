'use strict';


var dropdown = $(".dropdown");

// Onclick on a dropdown__btn, toggle dropdown visibility
dropdown.find(".dropdown__btn").click(function(){
    $(this).next().children().toggle("fast");
    console.log("onclick btn");
});

// Click handler for dropdown
dropdown.find("dd ul li a").click(function(){
    var leSpan = $(this).parents(".dropdown").find("dt a span");
  
    // Remove selected class
    $(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
    console.log("click handler");
  });
  
    // Update selected value
    leSpan.html($(this).html());
  
    // If back to default, remove selected class else addclass on right element
    if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
    else{
        leSpan.addClass('selected');
        $(this).addClass('selected');
    }
  
    // Close dropdown
    $(this).parents("ul").hide();
    console.log("close dropdown");
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e){
    if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});