document.querySelector('.grid').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {

        var myElement = document.createElement('div');
        myElement.className = 'preview';
        e.target.parentNode.appendChild(myElement);

        var myImg = document.createElement('img');
        var imgLoc = e.target.src;
        myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
        myElement.appendChild(myImg);

        // eliminar las fotos una vez visualizdas
        e.target.addEventListener('mouseout', function handler(d) {
            var myNode = d.target.parentNode.querySelector('div.preview');
            myNode.parentNode.removeChild(myNode);
            e.target.removeEventListener('mouseout', handler, false);
        }, false);

    } // check to see that I clicked on IMG only
}, false); // click event