$(document).ready(function(e) {
    muestra($(".parrilla li"));
    $(".parrilla li")
        .mouseenter(function(e) {
            $(this).animate({ 'opacity': 0.9 }, 1000,
                'easeOutElastic');
            $(this).children().children().animate({ 'width': 165 }, 1000,
                'easeOutElastic');
        })
        .mouseleave(function(e) {
            $(this).animate({ 'opacity': 1 }, 400,
                'easeInCirc');
            $(this).children().children().animate({ 'width': 178 }, 400,
                'easeInCirc');
        });
});