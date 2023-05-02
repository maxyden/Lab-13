function start() {

    var button = document.getElementById('tmagic');
   
    button.onclick = magic;
  }
  // function to change display of the element.
function magic(){  
  //variable to to get element.
  var y = document.getElementById('magic');

  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
  
  }
      window.onload = start;