//comprueba si el navegador es versión antigua de microsoft o los nuevos que utiliza XMLHttpRequest
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

//abrimos el request preguntando por un fichero en concreto
request.open('GET', 'data.json');
//si el fichero esta en un servidor externo
//se añade como un script en la página html
//request.open('GET', 'http://viewsource.com/jsonfiles/data.json');

request.onreadystatechange = function() {
        if ((request.status === 200) &&
            (request.readyState === 4)) {

            //para transformar los datos en un objeto
            info = JSON.parse(request.responseText);

            var output = '';
            for (var i = 0; i <= info.links.length - 1; i++) {
                for (key in info.links[i]) {
                    if (info.links[i].hasOwnProperty(key)) {
                        output += '<li>' +
                            '<a href = "' + info.links[i][key] +
                            '">' + key + '</a>';
                        '</li>';
                    }
                }
            }

            var update = document.getElementById('links');
            update.innerHTML = output;


        } //ready
    } //event
request.send();