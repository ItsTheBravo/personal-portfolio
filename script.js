
  function openTech(techName) {
    var i;
    var x = document.getElementsByClassName("tech");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(techName).style.display = "block";  
  }