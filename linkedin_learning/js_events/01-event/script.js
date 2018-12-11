document.getElementById('yellow').addEventListener('click', function() {
    alert("You pushed yellow");
}, false);

// también se puede pasar un parámetro
/*
 *  document.getElementById('pink').addEventListener('click', function(e) {
 *    console.log(e);
 *  }, false);
 */

// si se usa addEventListener se usa asi
// addEventListener('click', function() {
// si se usa attachEvent se utiliza para navenagores antiguos
// attachEvent('onclick', function() {
// si se utiliza jquery
/*
 * $('#yellow').on('click', function(event)) {
 */