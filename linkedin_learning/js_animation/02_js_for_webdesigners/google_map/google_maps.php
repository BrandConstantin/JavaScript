<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 "> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>

        <!-- Basic Page Needs -->
        <meta charset="utf-8">
        <title>Google Maps</title>
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- Mobile Specific Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <!-- FONTS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Lato:300'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700'>

    </head>

<body class="layout-full-width header-transparent header-menu-right sticky-header sticky-white subheader-both-center no-content-padding">
    <!-- Main Theme Wrapper -->
    <div id="Wrapper">
        <!-- Header Wrapper -->
        <div id="Header_wrapper" class="bg-fixed">
            <!-- Header -->
            <header id="Header" style="min-height: 100px">

               <?php include 'header.php'; ?>
            </header>
            <!--Subheader area - only for certain pages -->
            <div id="Subheader">
                <div class="container">
                    <div class="column one">
                        <h1 class="title">Contacto</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main Content -->
        <div id="Content">
            <div class="content_wrapper clearfix">
                <div class="sections_group">
                    <div class="entry-content">
                        <div class="section full-width sections_style_0 ">
                            <div class="section_wrapper clearfix">
                                <div class="items_group clearfix">
                                    <!-- One full width row-->
                                    <div class="column one column_map">

                                        <!-- Google map area -->
                                        <div class="google-map-wrapper">
                                            <div class="google-map" id="google-map-area-552024edb743e" style="width:100%; height:450px;">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-->
        <?php include 'footer.php'; ?>
    </div>

    <script src="http://maps.google.com/maps/api/js?sensor=false&ver=5.9"></script>

    <script>
        var locations = [
        ['Envato 1', 28.119261,-15.427716],
        ['Envato 2', 28.117825, -15.528737]
        ];
        
        var map = new google.maps.Map(document.getElementById('google-map-area-552024edb743e'), {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#e0efef"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "hue": "#1900ff"
                }, {
                    "color": "#c0e8e8"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": 700
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#7dcdcd"
                }]
            }],
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false,
            center: new google.maps.LatLng(28.11, -15.52)
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) { 
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: "images/home_spa_pin.png"
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                }
            })(marker, i));
        }
    </script>
    
</body>

</html>