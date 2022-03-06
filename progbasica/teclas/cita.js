var teclas = {
  UP: 38
};

var teclitas = {
  DOWN: 40
};

var teclotas = {
  LEFT: 37
};

var tecloncitas = {
  RIGHT: 39
};

console.log(teclas);

console.log(teclitas);

console.log(teclotas);

console.log(tecloncitas);


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath()
}

function dibujarTeclado(evento)
  {
switch(evento.keyCode)
{
  case teclas.UP:
    dibujarLinea("red", x, y, x, y - 1, papel);
    y = y -1;
   break;
  case teclitas.DOWN:
    dibujarLinea("red", x, y, x, y + 1, papel);
    y = y + 1;
   break;
  case teclotas.LEFT:
    dibujarLinea("red", x, y, x - 1, y, papel);
    x = x - 1;
   break;
  case tecloncitas.RIGHT:
   dibujarLinea("red", x, y, x + 1, y, papel);
    x = x + 1;
   break;
 }
}
