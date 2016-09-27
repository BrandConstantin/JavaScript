function miMovimiento() {
  var elem = document.getElementById("animate");
  var id = setInterval(mover, 15);
  var a = 0;
  var b = 0;

  function mover() {
    if ((a == 0) && (b == 1)) {
      clearInterval(id);
    } else if((a < 350) && (b == 0)){
      a++;
      elem.style.left = a + 'px';
    } else if((a == 350) && (b < 350)){
      b++;
      elem.style.top = b + 'px';
    } else if((a > 0) && (b == 350)){
      a--;
      elem.style.left = a + 'px';
    }else if((a == 0) && (b > 0)){
      b--;
      elem.style.top = b + 'px';
    }
  }
}