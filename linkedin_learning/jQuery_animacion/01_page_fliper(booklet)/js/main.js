$(document).ready(init);

function init() {
    $("#mi_libro").booklet({
        width: 800,
        height: 500,
        closed: true,
        covers: true,
        autoCenter: true,
        pagePdding: 10,
        hoverWidth: 100,
    });

    $("#bt_go").click(function() {
        $('#mi_libro').booklet("gotopage", $("#in_go").val());
    })
}