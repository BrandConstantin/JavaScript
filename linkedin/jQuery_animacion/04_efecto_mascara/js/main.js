$(document).ready(init);

function init() {
    $margen = 20;
    $velocidad = 500;
    $("li").mouseenter(function(e) {
        var ancho = $(this).width();
        var alto = $(this).height();

        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        //mirar todos los efectos easeInOutCirc, etc en jQuery efect ui
        $tapa = $(this).find(".tapa");
        //e.offsetX
        if (x < $margen) {
            $tapa.css("margin-top", "0px");
            $tapa.css("margin-left", "-" + ancho + "px");
            $tapa.animate({ 'margin-left': '0px' },
                $velocidad,
                'easeInOutCirc');
        } else if (x > ancho - $margen) {
            $tapa.css("margin-top", "0px");
            $tapa.css("margin-left", ancho + "px");
            $tapa.animate({ 'margin-left': '0px' },
                $velocidad,
                'easeInOutElastic');
        } else if (y < $margen) {
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", "-" + alto + "px");
            $tapa.animate({ 'margin-top': '0px' },
                $velocidad,
                'swing');
        } else if (y > alto - $margen) {
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", alto + "px");
            $tapa.animate({ 'margin-top': '0px' },
                $velocidad,
                'swing');
        }

        $tapa.css("visibility", "visible");
    });

    $("li").mouseleave(function(e) {
        var ancho = $(this).width();
        var alto = $(this).height();


        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;


        $tapa = $(this).find(".tapa");

        if (x < $margen) {
            $tapa.animate({ 'margin-left': "-" + ancho + "px" },
                $velocidad,
                'swing');
        } else if (x > ancho - $margen) {
            $tapa.animate({ 'margin-left': ancho + 'px' },
                $velocidad,
                'swing');
        } else if (y < $margen) {
            $tapa.animate({ 'margin-top': "-" + alto + "px" },
                $velocidad,
                'swing');
        } else if (y > alto - $margen) {
            $tapa.animate({ 'margin-top': alto + "px" },
                $velocidad,
                'swing');
        }

    });
}