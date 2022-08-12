

/* Mostrar contenido ocultado con hidden-xs */
var objects = document.getElementsByClassName("hidden-menu");
for (var obj of objects) {
    console.log(obj);
}

var checkbox = document.getElementById("check");
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
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