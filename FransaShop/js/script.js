
/* ocultar y mostrar las opciones en nuestro menu */
var checkbox = document.getElementById("check");
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked) {
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideDown("slow");
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").css("display","block");
  }
  else $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideToggle("slow");
}

// ocultar y mostrar submenu
$(document).ready(function(){  
  $(".nav .submenu").click(function(){
    $(".nav .submenu .children").slideToggle("1000");
    $(".nav .submenu").css("background-color", "#5A5959");
  });
  // Si el submenu esta abierto, se cerrara.
  $(".nav .checkbtn").click(function () {
    $(".nav .submenu .children").slideUp("slow");
  });
  //
  $(".nav #hidden-menu4").click(function () {
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4, .nav .submenu .children").slideUp("slow");
  });
});

$(window).resize(function() {
  if ($(this).width() < 767) {
  $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4, .nav .submenu .children").slideUp("slow");
  } else {
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideDown("fast");
  }
});