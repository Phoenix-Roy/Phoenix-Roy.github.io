function myFunction() {
    var x = document.getElementById("bottomNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  } 