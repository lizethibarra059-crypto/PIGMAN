// boton para pausar el juego
const botonPausa = document.getElementById("boton-pausa");
// menu que aparece cuando pausamos el juego
const menuPausa = document.getElementById("menu-pausa");
// boton para reanudar el juego
const botonReanudar = document.getElementById("boton-reanudar");
// boton para reiniciar el nivel
const botonReiniciar = document.getElementById("boton-reiniciar");
// boton para activar o desactivar el sonido
const botonSonido = document.getElementById("boton-sonido");
// indica si el juego esta pausado
let juegoPausado = false;
// indica si el sonido esta activado
let sonidoActivado = true;
// pausamos el juego al presionar el boton
botonPausa.addEventListener("click", function() {

    juegoPausado = true;
    // pausamos la musica
    musicaFondo.pause();
    menuPausa.style.display = "block";

    console.log("juego pausado");

});

// reanudamos el juego
botonReanudar.addEventListener("click", function() {

    juegoPausado = false;
    console.log("sonido activado:", sonidoActivado);
    // continuamos la musica solo si esta activada
   if (sonidoActivado) {
      musicaFondo.play();
    }
    menuPausa.style.display = "none";

    console.log("juego reanudado");

});
// reiniciamos el nivel
botonReiniciar.addEventListener("click", function() {

    // quitamos la pausa
    juegoPausado = false;

    // ocultamos el menu de pausa
    menuPausa.style.display = "none";

    // regresamos a pigman y enemigos a sus posiciones iniciales
    reiniciarPosiciones();
    // reiniciamos las vidas
    vidas = 3;
    document.getElementById("vidas").textContent = "vidas: " + vidas;

    // reiniciamos los puntos
    puntos = 0;
    document.getElementById("marcador").textContent = "puntos: " + puntos;
    // mostramos nuevamente todas las hamburguesas
    document.querySelectorAll(".hamburguesa").forEach(function(hamburguesa) {
      hamburguesa.style.display = "block";
   });

   // mostramos nuevamente todas las sodas
   document.querySelectorAll(".soda").forEach(function(soda) {
     soda.style.display = "block";
    });

   // mostramos nuevamente el corazon
   document.getElementById("corazon").style.display = "block";
   // cancelamos el efecto de la soda
   clearTimeout(temporizadorSoda);
   enemigosVulnerables = false;
   velocidad = 5;
   // reiniciamos la musica
   musicaFondo.currentTime = 0;

   // reproducimos la musica solo si esta activada
   if (sonidoActivado) {
      musicaFondo.play();
    }
});
// activamos o desactivamos la musica
botonSonido.addEventListener("click", function() {

    if (sonidoActivado) {

        // apagamos la musica
        sonidoActivado = false;
        musicaFondo.pause();

        botonSonido.textContent = "MÚSICA 🔇";

    } else {

        // encendemos la musica
        sonidoActivado = true;
        musicaFondo.play();

        botonSonido.textContent = "MÚSICA 🔊";

    }

});