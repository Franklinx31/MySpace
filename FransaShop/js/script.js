
/* ocultar y mostrar las opciones en nuestro menu */
var checkbox = document.getElementById("check");
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked) {
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideDown("1000");
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").css("display","block");
  }
  else { 
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideToggle("1000");
  }
}

//////////// ocultar y mostrar categorias //////////

function show_categories(option) 
{
  if ( option == "Accesorios") { 
    $(".accesorios").css("display","inline-block"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else if ( option == "Adaptadores") {
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","inline-block");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else if ( option == "Audifonos") {
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","inline-block");  
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else if ( option == "Cargadores") {
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","inline-block"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else if ( option == "Convertidor TV-Smart TV") {  
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","inline-block"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else if ( option == "Relojes inteligentes") {
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","inline-block"); 
    $(".otros").css("display","none"); 
    console.log(option);
  }
  else {
    $(".accesorios").css("display","none"); 
    $(".audifonos").css("display","none"); 
    $(".adaptadores").css("display","none");
    $(".cargadores").css("display","none"); 
    $(".fires-tv").css("display","none"); 
    $(".relojes").css("display","none"); 
    $(".otros").css("display","inline-block"); 
    console.log(option);
  }
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
});

$(window).resize(function() {
  if ($(this).width() < 767) {
    $(".nav #hidden-menu4").click(function () {
      $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4, .nav .submenu .children").slideUp("1000");
    });



  $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4, .nav .submenu .children").slideUp("1000");
  } else {
    $(".nav #hidden-menu, .nav #hidden-menu2, .nav #hidden-menu3, .nav #hidden-menu4").slideDown("1000");
  }
});