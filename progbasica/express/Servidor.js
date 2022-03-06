var cerveza = require("express");
var aplicacion = cerveza();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  rsultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
  rsultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);
