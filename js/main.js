document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

document.getElementById('submit');
var nama ="";

function sub() {

  nama = document.getElementById('nama').value;
  if ( nama == "" ) {

    swal({
      title: "Error",
      icon: "error",
      text: "Please type your name here",
    });
  }

  else {
    $(document).ready(function() {
      $("#submit").click(function() {
        $("#home").removeClass("is-hidden");
        $("#form").addClass("is-hidden");
      })
    })

    document.getElementById('na').innerHTML = nama;
  }
}

document.getElementById('cek');

$(document).ready(function() {
  $("#cek").click(function() {
    $("#app").removeClass("is-hidden");
    $("#page").addClass("is-hidden");
  })
})

document.getElementById('sbm');

function hitung() {
  var m1    = document.getElementById('str').value;
  var m2    = document.getElementById('str2').value;
  var nilai = document.getElementById('uang').value;

  if ( nilai == "" ) {
    swal({
      title: "Error",
      text: "Please Enter Value of Your Money",
      icon: "error",
    });
  }

  else if ( m1 == "IDR" && m2 == "IDR" ) {
    document.getElementById('hasil').value = nilai;
  }

  else if ( m1 == "USD" && m2 == "IDR" ) {
    var resul = nilai * 13879.00;
    resul = resul.toFixed(2);
    document.getElementById('hasil').value = resul;
  }

  else if ( m1 == "SGD" && m2 == "IDR" ) {
    var resul = nilai * 10560.69;
    resul = resul.toFixed(2);
    document.getElementById('hasil').value = resul;
  }

  else if ( m1 == "EUR" && m2 == "IDR" ) {
    var resul = nilai * 17116.19;
    resul = resul.toFixed(2);
    document.getElementById('hasil').value = resul;
  }

  else if ( m1 == "CAD" && m2 == "IDR" ) {
    var resul = nilai * 10983.59;
    resul = resul.toFixed(2);
    document.getElementById('hasil').value = resul;
  }

  else {
    swal({
      title: "Error",
      text: "Please Try Again",
      icon: "Error",
    });
  }
}
