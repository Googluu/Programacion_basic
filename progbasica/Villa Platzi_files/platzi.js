var vp = document.getElementById("villasneyder");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarTile);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarTile()
{
  fondo.cargaOK = true;
  dibujar();
}

function dibujar()
{
   if(fondo.cargaOK == cargarTile);
 {
   papel.drawImage(fondo.dibujar, 0, 0);
}
   if(vaca.cargaOK);
 {

   console.log(cantidad);
 for(var v=0; v < cantidad; v++)
 {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    var x = x * 60;
    var y = y * 60;
    papel.drawImage(vaca.dibujar, x, y);
  }
 }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;}
