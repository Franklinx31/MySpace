

/* ocultar y mostrar las opciones en nuestro menu */
var checkbox = document.getElementById("check");
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked) {
    document.getElementById("hidden-menu").style.display = "block";
    document.getElementById("hidden-menu2").style.display = "block";
    document.getElementById("hidden-menu3").style.display = "block";
    document.getElementById("hidden-menu4").style.display = "block";
  }
  else {
  	document.getElementById("hidden-menu").style.display = "none";
    document.getElementById("hidden-menu2").style.display = "none";
    document.getElementById("hidden-menu3").style.display = "none";
    document.getElementById("hidden-menu4").style.display = "none";
  }
}





// mostrar y ocultar submenu con jquery
