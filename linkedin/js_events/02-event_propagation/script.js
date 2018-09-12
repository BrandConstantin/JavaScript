document.getElementById('grid').addEventListener('click', function(e) {
    // e.preventDefault();
    console.log(e.target.alt);
    // console.log(e.toElement.alt);
    // si hay más de un evento y se desea que este no salte al otro se para la propagación
    // e.stopPropagation();
}, true);