class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / div.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      {
        papeles = div;
      }
    }
       entregado.push( new Billete(bi.valor, papeles) );
       dinero = dinero - (bi.valor * papeles);
      }
      }
      if(dinero > 0)
      {
        resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :(";
      }
      else {
              for(var e of entregado)

      if(e.cantidad > 0){

      }
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />"

    }

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 50) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 30) );
caja.push( new Billete(5, 5) );
var dinero = 1000;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
