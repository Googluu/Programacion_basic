var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  console.lienzo.beginPath();
  console.lienzo.strokeStyle = color;
  console.lienzo.movaTo(xinicial, yinicial);
  console.lienzo.lineTo(xfinal, yfinal);
  console.lienzo.stroke();
  console.lienzo.closePath();
}
