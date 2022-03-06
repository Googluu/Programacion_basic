var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath()
}
function dibujarPorClick()
{
  var xxx = parseInt("texto_lineas");
  var linea = parseInt("texto_lineas " + linea);
  console.log(dibujarLinea);

  dibujarLinea("grey", 0, 0, 10, 300);
  dibujarLinea("grey", 0, 10, 20, 300);
  dibujarLinea("grey", 0, 20, 30, 300);
  dibujarLinea("grey", 0, 30, 40, 300);
  dibujarLinea("grey", 0, 40, 50, 300);
  dibujarLinea("grey", 0, 50, 60, 300);
  dibujarLinea("grey", 0, 60, 70, 300);
  dibujarLinea("grey", 0, 70, 80, 300);
  dibujarLinea("grey", 0, 80, 90, 300);
  dibujarLinea("grey", 0, 90, 100, 300);
  dibujarLinea("grey", 0, 100, 110, 300);
  dibujarLinea("grey", 0, 110, 120, 300);
  dibujarLinea("grey", 0, 120, 130, 300);
  dibujarLinea("grey", 0, 130, 140, 300);
  dibujarLinea("grey", 0, 140, 150, 300);
  dibujarLinea("grey", 0, 150, 160, 300);
  dibujarLinea("grey", 0, 160, 170, 300);
  dibujarLinea("grey", 0, 170, 180, 300);
  dibujarLinea("grey", 0, 180, 190, 300);
  dibujarLinea("grey", 0, 190, 200, 300);
  dibujarLinea("grey", 0, 200, 210, 300);
  dibujarLinea("grey", 0, 210, 220, 300);
  dibujarLinea("grey", 0, 220, 230, 300);
  dibujarLinea("grey", 0, 230, 240, 300);
  dibujarLinea("grey", 0, 240, 250, 300);
  dibujarLinea("grey", 0, 250, 260, 300);
  dibujarLinea("grey", 0, 260, 270, 300);
  dibujarLinea("grey", 0, 270, 280, 300);
  dibujarLinea("grey", 0, 280, 290, 300);
  dibujarLinea("grey", 0, 290, 300, 300);
  dibujarLinea("grey", 300, 10, 0, 0);
  dibujarLinea("grey", 300, 20, 10, 0);
  dibujarLinea("grey", 300, 30, 20, 0);
  dibujarLinea("grey", 300, 40, 30, 0);
  dibujarLinea("grey", 300, 50, 40, 0);
  dibujarLinea("grey", 300, 60, 50, 0);
  dibujarLinea("grey", 300, 70, 60, 0);
  dibujarLinea("grey", 300, 80, 70, 0);
  dibujarLinea("grey", 300, 90, 80, 0);
  dibujarLinea("grey", 300, 100, 90, 0);
  dibujarLinea("grey", 300, 110, 100, 0);
  dibujarLinea("grey", 300, 120, 110, 0);
  dibujarLinea("grey", 300, 130, 120, 0);
  dibujarLinea("grey", 300, 140, 130, 0);
  dibujarLinea("grey", 300, 150, 140, 0);
  dibujarLinea("grey", 300, 160, 150, 0);
  dibujarLinea("grey", 300, 170, 160, 0);
  dibujarLinea("grey", 300, 180, 170, 0);
  dibujarLinea("grey", 300, 190, 180, 0);
  dibujarLinea("grey", 300, 200, 190, 0);
  dibujarLinea("grey", 300, 210, 200, 0);
  dibujarLinea("grey", 300, 220, 210, 0);
  dibujarLinea("grey", 300, 230, 220, 0);
  dibujarLinea("grey", 300, 240, 230, 0);
  dibujarLinea("grey", 300, 250, 240, 0);
  dibujarLinea("grey", 300, 260, 250, 0);
  dibujarLinea("grey", 300, 270, 260, 0);
  dibujarLinea("grey", 300, 280, 270, 0);
  dibujarLinea("grey", 300, 290, 280, 0);
  dibujarLinea("grey", 300, 300, 290, 0);
}
