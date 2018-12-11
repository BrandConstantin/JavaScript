document.querySelector('.grid').addEventListener('click', function(e) {
    //console.dir(e.target);

    if (e.target.tagName === 'IMG') {
        console.log(this);
        var howmany = this.querySelectorAll('li').length;

        if (howmany > 1) {
            var removeTarget = e.target.parentNode;
            removeTarget.parentNode.removeChild(removeTarget);
        } else {
            var photoTitle = e.target.alt;
            document.querySelector('#art p').innerHTML = "<p>You've picked " + photoTitle + "</p>";
        }
    }
}, false);