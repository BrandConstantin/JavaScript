//sweetalert ////////////////////
$(document).ready(function() {
    $(".img_little").click(function() {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            buttons: {
                confirm: "Confirm",
                roll: {
                    cancel: "Cancel",
                    value: "roll",
                },
            },
        });
    });

    //metro librery
    $(".img_big").click(function() {
        $.smallBox({
            title: "Hola ParatyTech",
            content: "Has pulsado una de las grandes imágenes",
            fa: "fa-star-o",
            color: "#d34",
            sound: true,
            timeout: 3000,
            delay: 1,
        });
    });

    // con una clase diferente se podriá hacer un alert para cada imágen

    /* parte 2 */
    // json     
    $(".btn-success").click(function() {
        // datos mostrados con la libreria mustache
        //$.getJSON('listado_hoteles.json', function(data) {
        /*var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#resultados').html(html);*/


        //}); //getJSON
        $.getJSON('listado_hoteles.json', function(data) {
            console.log(data.sort());

            var dataSort = data.sort(function(a, b) {
                return a.precio - b.precio;
            });

            var reverseDataSort = dataSort.reverse();

            var output = '<ul>';
            $.each(reverseDataSort, function(key, val) {
                if (val.disponible == true) {
                    output += '<li>';
                    output += '<h2>' + val.nombre + "</h2>";
                    output += "<ul class=\'none\'>";
                    output += "<li>" + "Disponible" + "</li>";
                    output += "<li>" + val.precio + ' €</li>';
                    output += "</ul>";
                    output += '</li>';
                }
            });
            output += '</ul>';

            $('#resultados').html(output);
        });
    });
});