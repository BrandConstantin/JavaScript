$.datepicker.regional['es'] = {
    /*closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',*/
    dateFormat: 'dd/mm/yy'
        /*firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''*/
};
$.datepicker.setDefaults($.datepicker.regional['es']);

$(document).ready(function() {
    //select the numbers of the rooms
    var room;
    $('.show_rooms').change(function() {
        //$(this).find(':selected').attr('data-id');
        //var rooms = $('.show_rooms option:selected').text();
        room = $('.show_rooms option:selected').data('id');
        //console.log(rooms);

        // show the guest rooms, if change the number room it's change the room_wrapper
        if (room == 1) {
            $('.room_wrapper_1').show();
            $('.room_wrapper_2').hide();
            $('.room_wrapper_3').hide();
        } else if (room == 2) {
            $('.room_wrapper_1').show();
            $('.room_wrapper_2').show();
            $('.room_wrapper_3').hide();
        } else {
            $('.room_wrapper_1').show();
            $('.room_wrapper_2').show();
            $('.room_wrapper_3').show();
        }
    });

    // change the guest rooms showed
    $('#guest_select_active_area').on('click', function() {
        $('.guest_lists_wrapper').toggleClass('show');
        $('.arrow').toggleClass('rotate');
    });

    $('select').niceSelect();

    // better
    var today = new Date();
    var tomorrow = today + 1;
    $("#date_in").datepicker({
        inline: true,
        showOtherMonths: true,

        minDate: today,
        ignoreReadonly: true,
        defaultDate: tomorrow,
        useCurrent: false
    })

    $("#date_out").datepicker({
        inline: true,
        showOtherMonths: true
    })

    .datepicker('widget').wrap('<div class="dp_paraty_skin"/>');
});