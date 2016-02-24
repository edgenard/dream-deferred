(function() {
  'use strict';

  function navShowerHider () {
    var toc = document.getElementById("toc");
    var close = document.getElementById("close");
    var nav = document.getElementById("nav");


    toc.addEventListener("click", function (event) {
      event.preventDefault();
      toc.style.display = "none";
      nav.style.display = "flex";

    });

    close.addEventListener("click", function (event) {
      event.preventDefault();
      nav.style.display = "none";
      toc.style.display = "block";

    });

  }

  window.onload = navShowerHider;
}());
