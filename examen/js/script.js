window.onload = function () {
  fecha();

  fecha = setInterval(fecha, 1000);
};

function fecha() {
  fecha2 = new Date();

  diaSemana = fecha2.getDay();

  switch (diaSemana) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miercoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;

    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sabado";
      break;

    default:
      diaSemana = "domingo";
      break;
  }

  dia = fecha2.getDate();

  mes = fecha2.getMonth();

  switch (mes) {
    case 1:
      mes = "Febrero";
      break;
    case 2:
      mes = "Marzo";
      break;
    case 3:
      mes = "Abril";
      break;
    case 4:
      mes = "Mayo";
      break;

    case 5:
      mes = "Junio";
      break;
    case 6:
      mes = "Julio";
      break;
    case 7:
      mes = "Agosto";
      break;
    case 8:
      mes = "Septiembre";
      break;
    case 9:
      mes = "Octubre";
      break;
    case 10:
      mes = "Noviembre";
      break;

    case 11:
      mes = "Diciembre";
      break;

    default:
      mes = "Enero";
      break;
  }

  año = fecha2.getFullYear();

  tiempo = fecha2.getTime();
  horas = fecha2.getHours();
  minutos = fecha2.getMinutes();
  segundos = fecha2.getSeconds();

  textoFecha.innerHTML =
    "Hoy es " +
    diaSemana + 
    " " +
    dia +
    " de " +
    mes +
    " de " +
    año +
    " y son las " +
    horas +
    ":" +
    minutos +
    ":" +
    segundos +
    "</p>";
}

document.addEventListener("DOMContentLoaded", function () {
  const bola = document.getElementById("bola");
  let animationId;
  let positionY = 0;
  let positionX = 0;
  let alto = innerHeight;
  let ancho = innerWidth;
  let color = ["black", "blue", "red", "aquamarine"];
  const containerHeight = alto - bola.offsetHeight;
  const containerWidth = ancho - bola.offsetWidth;

  function animateBall() {
    positionY += 5;
    positionX += Math.floor(Math.random() * 100); // Mueve la bola 5 píxeles a la derecha en cada fotograma
    if (positionY > containerHeight) {
      positionY = 0; // Reinicia la posición cuando llega al borde derecho

      bola.style.left = positionX + "px";
      bola.style.color = color[Math.floor(Math.random() * 3)];
    }
    if (positionX > containerWidth) {
      positionX = 0;
    }
    bola.style.top = positionY + "px";
  }
  animationId = setInterval(animateBall, 2500 / 60);
});
function codificar() {
  textoSinCodificar = document.formulario.texto1.value;
  textoCodificado = encodeURI(textoSinCodificar);
  texto2 = document.getElementById("texto2");
  texto2.innerHTML = textoCodificado;
}
function decodificar() {
  textoSinCodificar = document.formulario.texto1.value;
  textoCodificado = decodeURI(textoSinCodificar);
  texto2 = document.getElementById("texto2");
  texto2.innerHTML = textoCodificado;
}
