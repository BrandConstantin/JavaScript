function myMove() {
  var elemement = document.getElementById("animate");   
  var position = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; 
      elemement.style.top = position + 'px'; 
      elemement.style.left = position + 'px'; 
    }
  }
}

function myMove2() {
  var elemement = document.getElementById("animate2");   
  var position = 0;
  var id = setInterval(frame2, 15);
  function frame2() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; 
      elemement.style.top = position + 'px'; 
      elemement.style.bottom = position + 'px'; 
    }
  }
}

function myMove3() {
  var elemement = document.getElementById("animate3");   
  var position = 0;
  var id = setInterval(frame3, 15);
  function frame3() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; 
      elemement.style.bottom = position + 'px'; 
      elemement.style.left = position + 'px'; 
    }
  }
}