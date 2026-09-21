// buscamos el boton de iniciar
const botonIniciar = document.getElementById("iniciar");

// buscamos las dos pantallas
const pantallaInicio = document.querySelector(".juego");
const pantallaJuego = document.getElementById("pantalla-juego");
// musica de fondo
const musicaFondo = document.getElementById("musica-fondo");
botonIniciar.addEventListener("click", function() {
    pantallaInicio.style.display = "none";
    pantallaJuego.style.display = "block";

    // inicia la musica
    musicaFondo.volume = 0.4;
    musicaFondo.play();
});
// posicion inicial de pigman
let posicionX = 425;
let posicionY = 420;

// velocidad del personaje
let velocidad = 5;
// direccion actual de pigman
let direccionPigman = "arriba";

// tamaño de pigman
const tamanoPigman = 35;

// funcion para comprobar si hay una colision
function hayColision(nuevaX, nuevaY) {

    const pigman = {
        izquierda: nuevaX,
        derecha: nuevaX + tamanoPigman,
        arriba: nuevaY,
        abajo: nuevaY + tamanoPigman
    };

    const paredes = document.querySelectorAll(".pared");

    for (let pared of paredes) {

        const paredRect = pared.getBoundingClientRect();
        const laberintoRect = document.getElementById("laberinto").getBoundingClientRect();

        const paredIzquierda = paredRect.left - laberintoRect.left;
        const paredDerecha = paredRect.right - laberintoRect.left;
        const paredArriba = paredRect.top - laberintoRect.top;
        const paredAbajo = paredRect.bottom - laberintoRect.top;

        if (
            pigman.derecha > paredIzquierda &&
            pigman.izquierda < paredDerecha &&
            pigman.abajo > paredArriba &&
            pigman.arriba < paredAbajo
        ) {
            return true;
        }
    }

    return false;
}

// movimiento con el teclado
document.addEventListener("keydown", function(evento) {

    let nuevaX = posicionX;
    let nuevaY = posicionY;

    if (evento.key === "ArrowUp") {
    nuevaY -= velocidad;
    direccionPigman = "arriba";

    // pigman mira hacia arriba
    document.getElementById("pigman").style.backgroundImage =
        'url("assets/sprites/pigman-espalda.png")';
}

if (evento.key === "ArrowDown") {
    nuevaY += velocidad;
    direccionPigman = "abajo";

    // pigman mira hacia abajo
    document.getElementById("pigman").style.backgroundImage =
        'url("assets/sprites/pigman-frente.png")';
}

if (evento.key === "ArrowLeft") {
    nuevaX -= velocidad;
    direccionPigman = "izquierda";

    // pigman mira hacia la izquierda
    document.getElementById("pigman").style.backgroundImage =
        'url("assets/sprites/pigman-izquierda.png")';
}

if (evento.key === "ArrowRight") {
    nuevaX += velocidad;
    direccionPigman = "derecha";

    // pigman mira hacia la derecha
    document.getElementById("pigman").style.backgroundImage =
        'url("assets/sprites/pigman-derecha.png")';


    // pigman mira hacia la derecha
    document.getElementById("pigman").style.backgroundImage =
        'url("assets/sprites/pigman-derecha.png")';
}

    // tamaño del laberinto
    const anchoLaberinto = 900;
    const altoLaberinto = 500;

   // comprobamos que pigman no salga del laberinto
   if (
        nuevaX >= 0 &&
        nuevaY >= 0 &&
        nuevaX + tamanoPigman <= anchoLaberinto &&
        nuevaY + tamanoPigman <= altoLaberinto &&
        !hayColision(nuevaX, nuevaY)
   ) {
     posicionX = nuevaX;
     posicionY = nuevaY;
   }

    // actualizamos la posicion de pigman
    document.getElementById("pigman").style.left = posicionX + "px";
    document.getElementById("pigman").style.top = posicionY + "px";

    // comprobamos si pigman recogio una hamburguesa
    recogerHamburguesas();
    // comprobamos si pigman recogio el corazon
    recogerCorazon();
    recogerSodas();
    
});

// puntaje inicial
let puntos = 0;

// vidas iniciales
let vidas = 3;

// funcion para perder una vida
function perderVida() {

    vidas--;

    // actualizamos el marcador
    document.getElementById("vidas").textContent = "vidas: " + vidas;

    console.log("vidas: " + vidas);
}

// funcion para recoger el corazon
function recogerCorazon() {

    const pigman = document.getElementById("pigman");
    const corazon = document.getElementById("corazon");

    if (corazon.style.display === "none") {
        return;
    }

    const pigmanRect = pigman.getBoundingClientRect();
    const corazonRect = corazon.getBoundingClientRect();

    if (
        pigmanRect.right > corazonRect.left &&
        pigmanRect.left < corazonRect.right &&
        pigmanRect.bottom > corazonRect.top &&
        pigmanRect.top < corazonRect.bottom
    ) {

        // solo recuperamos vida si tenemos menos de 3
        if (vidas < 3) {

            vidas++;

            corazon.style.display = "none";

            document.getElementById("vidas").textContent = "vidas: " + vidas;
        }
    }
}

// funcion para recoger hamburguesas
function recogerHamburguesas() {

    const pigman = document.getElementById("pigman");
    const hamburguesas = document.querySelectorAll(".hamburguesa");

    const pigmanRect = pigman.getBoundingClientRect();

    hamburguesas.forEach(function(hamburguesa) {

        if (hamburguesa.style.display === "none") {
            return;
        }

        const hamburguesaRect = hamburguesa.getBoundingClientRect();

        if (
            pigmanRect.right > hamburguesaRect.left &&
            pigmanRect.left < hamburguesaRect.right &&
            pigmanRect.bottom > hamburguesaRect.top &&
            pigmanRect.top < hamburguesaRect.bottom
        ) {

            hamburguesa.style.display = "none";

            puntos += 10;

           // actualizamos el marcador
           document.getElementById("marcador").textContent = "puntos: " + puntos;
        }

    });
}

// movimiento de la zanahoria
const zanahoria = document.getElementById("zanahoria");

// posicion inicial de la zanahoria
let zanahoriaX = 425;
let zanahoriaY = 40;

// velocidad de la zanahoria
const velocidadZanahoria = 2;

// direccion inicial
let direccionZanahoria = "derecha";
// funcion para comprobar las colisiones de la zanahoria
function hayColisionZanahoria(nuevaX, nuevaY) {

    const tamanoZanahoria = 45;

    const enemigo = {
        izquierda: nuevaX,
        derecha: nuevaX + tamanoZanahoria,
        arriba: nuevaY,
        abajo: nuevaY + tamanoZanahoria
    };

    const paredes = document.querySelectorAll(".pared");
    const laberintoRect = document.getElementById("laberinto").getBoundingClientRect();

    for (let pared of paredes) {
        const paredRect = pared.getBoundingClientRect();

        const paredIzquierda = paredRect.left - laberintoRect.left;
        const paredDerecha = paredRect.right - laberintoRect.left;
        const paredArriba = paredRect.top - laberintoRect.top;
        const paredAbajo = paredRect.bottom - laberintoRect.top;

        if (
            enemigo.derecha > paredIzquierda &&
            enemigo.izquierda < paredDerecha &&
            enemigo.abajo > paredArriba &&
            enemigo.arriba < paredAbajo
        ) {
            return true;
        }
    }

    return false;
}

// funcion para saber que caminos tiene disponibles
function obtenerDireccionesDisponibles(x, y) {

    const direcciones = [];

    // comprobamos arriba
    if (!hayColisionZanahoria(x, y - velocidadZanahoria)) {
        direcciones.push("arriba");
    }

    // comprobamos abajo
    if (!hayColisionZanahoria(x, y + velocidadZanahoria)) {
        direcciones.push("abajo");
    }

    // comprobamos izquierda
    if (!hayColisionZanahoria(x - velocidadZanahoria, y)) {
        direcciones.push("izquierda");
    }

    // comprobamos derecha
    if (!hayColisionZanahoria(x + velocidadZanahoria, y)) {
        direcciones.push("derecha");
    }

    return direcciones;
}

// funcion para elegir una direccion hacia pigman
function elegirDireccionHaciaPigman(caminos) {

    // calculamos la distancia entre zanahoria y pigman
    const distanciaX = posicionX - zanahoriaX;
    const distanciaY = posicionY - zanahoriaY;

    // primero intentamos acercarnos por el eje con mayor distancia
    if (Math.abs(distanciaX) > Math.abs(distanciaY)) {

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

    } else {

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }
    }

    // si no puede acercarse directamente toma otro camino
    return caminos[Math.floor(Math.random() * caminos.length)];
}


// funcion para mover la zanahoria
function moverZanahoria() {

    let nuevaX = zanahoriaX;
    let nuevaY = zanahoriaY;

    // alpha revisa los caminos mientras persigue a pigman
if (Math.random() < 0.03) {

    const caminos =
        obtenerDireccionesDisponibles(zanahoriaX, zanahoriaY);

    if (caminos.length > 1) {

        // la mayoria de las veces intenta acercarse a pigman
        if (Math.random() < 0.75) {
            direccionZanahoria =
                elegirDireccionHaciaPigman(caminos);
        } else {

            // algunas veces toma otro camino
            direccionZanahoria =
                caminos[Math.floor(Math.random() * caminos.length)];
        }
    }
}

   if (direccionZanahoria === "derecha") {
       nuevaX += velocidadZanahoria;

        if (!enemigosVulnerables) {
            zanahoria.style.backgroundImage =
              'url("assets/sprites/zanahoria-derecha.png")';
        }
    }

    if (direccionZanahoria === "izquierda") {
        nuevaX -= velocidadZanahoria;

        if (!enemigosVulnerables) {
            zanahoria.style.backgroundImage =
               'url("assets/sprites/zanahoria-izquierda.png")';
        }
    }

    if (direccionZanahoria === "arriba") {
        nuevaY -= velocidadZanahoria;

        if (!enemigosVulnerables) {
           zanahoria.style.backgroundImage =
             'url("assets/sprites/zanahoria-espalda.png")';
        }
    }

    if (direccionZanahoria === "abajo") {
        nuevaY += velocidadZanahoria;

        if (!enemigosVulnerables) {
           zanahoria.style.backgroundImage =
             'url("assets/sprites/zanahoria-frente.png")';
        }
    }

    const laberinto = document.getElementById("laberinto");
    const anchoLaberinto = laberinto.clientWidth;
    const altoLaberinto = laberinto.clientHeight;

    // comprobamos si puede avanzar
    if (
        nuevaX >= 0 &&
        nuevaY >= 0 &&
        nuevaX + 45 <= anchoLaberinto &&
        nuevaY + 45 <= altoLaberinto &&
        !hayColisionZanahoria(nuevaX, nuevaY)
    ) {
        zanahoriaX = nuevaX;
        zanahoriaY = nuevaY;
    } else {

       // si no puede avanzar busca otro camino hacia pigman
       const caminos =
           obtenerDireccionesDisponibles(zanahoriaX, zanahoriaY);

        if (caminos.length > 0) {
            direccionZanahoria =
              elegirDireccionHaciaPigman(caminos);
        }
    }

    // actualizamos la posicion
    zanahoria.style.left = zanahoriaX + "px";
    zanahoria.style.top = zanahoriaY + "px";
}
// movemos la zanahoria automaticamente
setInterval(moverZanahoria, 30);

// movimiento del brocoli
const brocoli = document.getElementById("brocoli");
let brocoliX = 200;
let brocoliY = 250;
// velocidad del brocoli
const velocidadBrocoli = 2;
// direccion inicial
let direccionBrocoli = "derecha";
// funcion para comprobar las colisiones del brocoli
function hayColisionBrocoli(nuevaX, nuevaY) {

    const tamanoBrocoli = 50;

    const enemigo = {
        izquierda: nuevaX,
        derecha: nuevaX + tamanoBrocoli,
        arriba: nuevaY,
        abajo: nuevaY + tamanoBrocoli
    };

    const paredes = document.querySelectorAll(".pared");
    const laberintoRect =
        document.getElementById("laberinto").getBoundingClientRect();

    for (let pared of paredes) {

        const paredRect = pared.getBoundingClientRect();

        const paredIzquierda =
            paredRect.left - laberintoRect.left;

        const paredDerecha =
            paredRect.right - laberintoRect.left;

        const paredArriba =
            paredRect.top - laberintoRect.top;

        const paredAbajo =
            paredRect.bottom - laberintoRect.top;

        if (
            enemigo.derecha > paredIzquierda &&
            enemigo.izquierda < paredDerecha &&
            enemigo.abajo > paredArriba &&
            enemigo.arriba < paredAbajo
        ) {
            return true;
        }
    }

    return false;
}
// funcion para saber que caminos tiene disponibles el brocoli
function obtenerDireccionesBrocoli(x, y) {

    const direcciones = [];

    if (!hayColisionBrocoli(x, y - velocidadBrocoli)) {
        direcciones.push("arriba");
    }

    if (!hayColisionBrocoli(x, y + velocidadBrocoli)) {
        direcciones.push("abajo");
    }

    if (!hayColisionBrocoli(x - velocidadBrocoli, y)) {
        direcciones.push("izquierda");
    }

    if (!hayColisionBrocoli(x + velocidadBrocoli, y)) {
        direcciones.push("derecha");
    }

    return direcciones;
}

// funcion para elegir una direccion de intercepcion
function elegirDireccionBrocoli(caminos) {

    // punto al que intentara llegar el brocoli
    let objetivoX = posicionX;
    let objetivoY = posicionY;

    // beta intenta adelantarse a pigman
    const distanciaAdelanto = 100;

    if (direccionPigman === "derecha") {
        objetivoX += distanciaAdelanto;
    }

    if (direccionPigman === "izquierda") {
        objetivoX -= distanciaAdelanto;
    }

    if (direccionPigman === "arriba") {
        objetivoY -= distanciaAdelanto;
    }

    if (direccionPigman === "abajo") {
        objetivoY += distanciaAdelanto;
    }

    // calculamos donde esta el objetivo
    const distanciaX = objetivoX - brocoliX;
    const distanciaY = objetivoY - brocoliY;

    // intentamos acercarnos primero por el eje mas lejano
    if (Math.abs(distanciaX) > Math.abs(distanciaY)) {

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

    } else {

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }
    }

    // si no puede ir hacia el objetivo toma otro camino
    return caminos[Math.floor(Math.random() * caminos.length)];
}


// funcion para mover el brocoli
function moverBrocoli() {

    let nuevaX = brocoliX;
    let nuevaY = brocoliY;

    // beta revisa los caminos para adelantarse a pigman
if (Math.random() < 0.03) {

    const caminos =
        obtenerDireccionesBrocoli(brocoliX, brocoliY);

    if (caminos.length > 1) {

        // la mayoria de las veces intenta interceptar a pigman
        if (Math.random() < 0.75) {
            direccionBrocoli =
                elegirDireccionBrocoli(caminos);
        } else {

            // algunas veces toma otro camino
            direccionBrocoli =
                caminos[Math.floor(Math.random() * caminos.length)];
        }
    }
}

    // movimiento segun la direccion
    if (direccionBrocoli === "derecha") {
        nuevaX += velocidadBrocoli;

        brocoli.style.backgroundImage =
            'url("assets/sprites/brocoli-derecha.png")';
    }

    if (direccionBrocoli === "izquierda") {
        nuevaX -= velocidadBrocoli;

        brocoli.style.backgroundImage =
            'url("assets/sprites/brocoli-izquierda.png")';
    }

    if (direccionBrocoli === "arriba") {
        nuevaY -= velocidadBrocoli;

        brocoli.style.backgroundImage =
            'url("assets/sprites/brocoli-espalda.png")';
    }

    if (direccionBrocoli === "abajo") {
        nuevaY += velocidadBrocoli;

        brocoli.style.backgroundImage =
            'url("assets/sprites/brocoli-frente.png")';
    }

    const laberinto = document.getElementById("laberinto");
    const anchoLaberinto = laberinto.clientWidth;
    const altoLaberinto = laberinto.clientHeight;

    // comprobamos si puede avanzar
    if (
        nuevaX >= 0 &&
        nuevaY >= 0 &&
        nuevaX + 50 <= anchoLaberinto &&
        nuevaY + 50 <= altoLaberinto &&
        !hayColisionBrocoli(nuevaX, nuevaY)
    ) {
        brocoliX = nuevaX;
        brocoliY = nuevaY;
    } else {

        // si encuentra un obstaculo busca otro camino para interceptar a pigman
        const caminos =
            obtenerDireccionesBrocoli(brocoliX, brocoliY);

        if (caminos.length > 0) {
               direccionBrocoli =
                  elegirDireccionBrocoli(caminos);
        }
    }

    // actualizamos la posicion
    brocoli.style.left = brocoliX + "px";
    brocoli.style.top = brocoliY + "px";
}
// movemos el brocoli automaticamente
setInterval(moverBrocoli, 30);

// movimiento del jitomate
const jitomate = document.getElementById("jitomate");

// posicion inicial del jitomate
let jitomateX = 425;
let jitomateY = 400;

// velocidad del jitomate
const velocidadJitomate = 2;

// tamaño visual del jitomate
const tamanoJitomate = 50;

// direccion inicial
let direccionJitomate = "izquierda";


// funcion para comprobar las colisiones del jitomate
function hayColisionJitomate(nuevaX, nuevaY) {

    const tamanoJitomate = 50;

    const enemigo = {

        izquierda: nuevaX,

        derecha: nuevaX + tamanoJitomate,

        arriba: nuevaY,

        abajo: nuevaY + tamanoJitomate

    };

    const paredes = document.querySelectorAll(".pared");

    const laberintoRect =
        document.getElementById("laberinto").getBoundingClientRect();

    for (let pared of paredes) {

        const paredRect = pared.getBoundingClientRect();

        const paredIzquierda =
            paredRect.left - laberintoRect.left;

        const paredDerecha =
            paredRect.right - laberintoRect.left;

        const paredArriba =
            paredRect.top - laberintoRect.top;

        const paredAbajo =
            paredRect.bottom - laberintoRect.top;

        if (
            enemigo.derecha > paredIzquierda &&
            enemigo.izquierda < paredDerecha &&
            enemigo.abajo > paredArriba &&
            enemigo.arriba < paredAbajo
        ) {

            return true;

        }

    }

    return false;

}


// funcion para saber que caminos tiene disponibles el jitomate
function obtenerDireccionesJitomate(x, y) {

    const direcciones = [];

    if (!hayColisionJitomate(x, y - velocidadJitomate)) {

        direcciones.push("arriba");

    }

    if (!hayColisionJitomate(x, y + velocidadJitomate)) {

        direcciones.push("abajo");

    }

    if (!hayColisionJitomate(x - velocidadJitomate, y)) {

        direcciones.push("izquierda");

    }

    if (!hayColisionJitomate(x + velocidadJitomate, y)) {

        direcciones.push("derecha");

    }

    return direcciones;

}

// funcion para que gamma se acerque a pigman algunas veces
function elegirDireccionGamma(caminos) {

    const distanciaX = posicionX - jitomateX;
    const distanciaY = posicionY - jitomateY;

    // primero intenta acercarse por el eje donde esta mas lejos
    if (Math.abs(distanciaX) > Math.abs(distanciaY)) {

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

    } else {

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }
    }

    // si no puede acercarse, toma un camino al azar
    return caminos[Math.floor(Math.random() * caminos.length)];
}
// movimiento automatico del jitomate
function moverJitomate() {

    let nuevaX = jitomateX;
    let nuevaY = jitomateY;

    // gamma cambia de direccion de vez en cuando
if (Math.random() < 0.03) {

    const caminos =
        obtenerDireccionesJitomate(jitomateX, jitomateY);

    if (caminos.length > 1) {

        // algunas veces intenta acercarse a pigman
        if (Math.random() < 0.35) {

            direccionJitomate =
                elegirDireccionGamma(caminos);

        } else {

            // la mayor parte del tiempo elige al azar
            direccionJitomate =
                caminos[Math.floor(Math.random() * caminos.length)];
        }
    }
}


    // movimiento hacia la derecha
    if (direccionJitomate === "derecha") {

        nuevaX += velocidadJitomate;

        jitomate.style.backgroundImage =
            'url("assets/sprites/jitomate-derecha.png")';
    }


    // movimiento hacia la izquierda
    if (direccionJitomate === "izquierda") {

        nuevaX -= velocidadJitomate;

        jitomate.style.backgroundImage =
            'url("assets/sprites/jitomate-izquierda.png")';
    }


    // movimiento hacia arriba
    if (direccionJitomate === "arriba") {

        nuevaY -= velocidadJitomate;

        jitomate.style.backgroundImage =
            'url("assets/sprites/jitomate-espalda.png")';
    }


    // movimiento hacia abajo
    if (direccionJitomate === "abajo") {

        nuevaY += velocidadJitomate;

        jitomate.style.backgroundImage =
            'url("assets/sprites/jitomate-frente.png")';
    }


    const laberinto = document.getElementById("laberinto");

    const anchoLaberinto = laberinto.clientWidth;
    const altoLaberinto = laberinto.clientHeight;


    // comprobamos si puede avanzar
    if (
        nuevaX >= 0 &&
        nuevaY >= 0 &&
        nuevaX + tamanoJitomate <= anchoLaberinto &&
        nuevaY + tamanoJitomate <= altoLaberinto &&
        !hayColisionJitomate(nuevaX, nuevaY)
    ) {

        jitomateX = nuevaX;
        jitomateY = nuevaY;

    } else {

    // si encuentra una cerca busca otro camino
    const caminos =
        obtenerDireccionesJitomate(jitomateX, jitomateY);

    if (caminos.length > 0) {

        // algunas veces intenta acercarse a pigman
        if (Math.random() < 0.35) {

            direccionJitomate =
                elegirDireccionGamma(caminos);

        } else {

            // otras veces toma un camino al azar
            direccionJitomate =
                caminos[Math.floor(Math.random() * caminos.length)];
        }
    }
}


    // actualizamos la posicion del jitomate
    jitomate.style.left = jitomateX + "px";
    jitomate.style.top = jitomateY + "px";
}


// hacemos que el jitomate se mueva
setInterval(moverJitomate, 30);

// movimiento de la LECHUGA
const lechuga = document.getElementById("lechuga");

// posicion inicial de la lechuga
let lechugaX = 425;
let lechugaY = 300;

// velocidad de la lechuga
const velocidadLechuga = 2;

// direccion inicial
let direccionLechuga = "derecha";
// funcion para comprobar las colisiones de la lechuga
function hayColisionLechuga(nuevaX, nuevaY) {

    const tamanoLechuga = 45;

    const enemigo = {
        izquierda: nuevaX,
        derecha: nuevaX + tamanoLechuga,
        arriba: nuevaY,
        abajo: nuevaY + tamanoLechuga
    };

    const paredes = document.querySelectorAll(".pared");

    const laberintoRect =
        document.getElementById("laberinto").getBoundingClientRect();

    for (let pared of paredes) {

        const paredRect = pared.getBoundingClientRect();

        const paredIzquierda =
            paredRect.left - laberintoRect.left;

        const paredDerecha =
            paredRect.right - laberintoRect.left;

        const paredArriba =
            paredRect.top - laberintoRect.top;

        const paredAbajo =
            paredRect.bottom - laberintoRect.top;

        if (
            enemigo.derecha > paredIzquierda &&
            enemigo.izquierda < paredDerecha &&
            enemigo.abajo > paredArriba &&
            enemigo.arriba < paredAbajo
        ) {
            return true;
        }
    }

    return false;
}
// funcion para saber que caminos tiene disponibles la lechuga
function obtenerDireccionesLechuga(x, y) {

    const direcciones = [];

    if (!hayColisionLechuga(x, y - velocidadLechuga)) {
        direcciones.push("arriba");
    }

    if (!hayColisionLechuga(x, y + velocidadLechuga)) {
        direcciones.push("abajo");
    }

    if (!hayColisionLechuga(x - velocidadLechuga, y)) {
        direcciones.push("izquierda");
    }

    if (!hayColisionLechuga(x + velocidadLechuga, y)) {
        direcciones.push("derecha");
    }

    return direcciones;
}
// funcion para elegir la direccion de delta
function elegirDireccionDelta(caminos) {

    const distanciaX = posicionX - lechugaX;
    const distanciaY = posicionY - lechugaY;

    // calculamos la distancia entre delta y pigman
    const distancia =
        Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

    // distancia para decidir cuando alejarse
    const distanciaSegura = 150;


    // si pigman esta cerca, delta intenta alejarse
    if (distancia < distanciaSegura) {

        if (Math.abs(distanciaX) > Math.abs(distanciaY)) {

            if (distanciaX > 0 && caminos.includes("izquierda")) {
                return "izquierda";
            }

            if (distanciaX < 0 && caminos.includes("derecha")) {
                return "derecha";
            }

            if (distanciaY > 0 && caminos.includes("arriba")) {
                return "arriba";
            }

            if (distanciaY < 0 && caminos.includes("abajo")) {
                return "abajo";
            }

        } else {

            if (distanciaY > 0 && caminos.includes("arriba")) {
                return "arriba";
            }

            if (distanciaY < 0 && caminos.includes("abajo")) {
                return "abajo";
            }

            if (distanciaX > 0 && caminos.includes("izquierda")) {
                return "izquierda";
            }

            if (distanciaX < 0 && caminos.includes("derecha")) {
                return "derecha";
            }
        }

    }


    // si pigman esta lejos, delta intenta acercarse
    if (Math.abs(distanciaX) > Math.abs(distanciaY)) {

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

    } else {

        if (distanciaY > 0 && caminos.includes("abajo")) {
            return "abajo";
        }

        if (distanciaY < 0 && caminos.includes("arriba")) {
            return "arriba";
        }

        if (distanciaX > 0 && caminos.includes("derecha")) {
            return "derecha";
        }

        if (distanciaX < 0 && caminos.includes("izquierda")) {
            return "izquierda";
        }
    }


    // si no encuentra el camino que quiere, elige uno disponible
    return caminos[Math.floor(Math.random() * caminos.length)];
}
// movimiento automatico de la lechuga
function moverLechuga() {

    let nuevaX = lechugaX;
    let nuevaY = lechugaY;

    // delta revisa los caminos para decidir que hacer
if (Math.random() < 0.03) {

    const caminos =
        obtenerDireccionesLechuga(lechugaX, lechugaY);

    if (caminos.length > 1) {

        direccionLechuga =
            elegirDireccionDelta(caminos);
    }
}


    // movimiento hacia la derecha
    if (direccionLechuga === "derecha") {

        nuevaX += velocidadLechuga;

        lechuga.style.backgroundImage =
            'url("assets/sprites/lechuga-derecha.png")';
    }


    // movimiento hacia la izquierda
    if (direccionLechuga === "izquierda") {

        nuevaX -= velocidadLechuga;

        lechuga.style.backgroundImage =
            'url("assets/sprites/lechuga-izquierda.png")';
    }


    // movimiento hacia arriba
    if (direccionLechuga === "arriba") {

        nuevaY -= velocidadLechuga;

        lechuga.style.backgroundImage =
            'url("assets/sprites/lechuga-espalda.png")';
    }


    // movimiento hacia abajo
    if (direccionLechuga === "abajo") {

        nuevaY += velocidadLechuga;

        lechuga.style.backgroundImage =
            'url("assets/sprites/lechuga-frente.png")';
    }


    const laberinto = document.getElementById("laberinto");

    const anchoLaberinto = laberinto.clientWidth;
    const altoLaberinto = laberinto.clientHeight;


    // comprobamos si puede avanzar
    if (
        nuevaX >= 0 &&
        nuevaY >= 0 &&
        nuevaX + 45 <= anchoLaberinto &&
        nuevaY + 45 <= altoLaberinto &&
        !hayColisionLechuga(nuevaX, nuevaY)
    ) {

        lechugaX = nuevaX;
        lechugaY = nuevaY;

    } else {

    // si encuentra una cerca busca otro camino
    const caminos =
        obtenerDireccionesLechuga(lechugaX, lechugaY);

    if (caminos.length > 0) {

        direccionLechuga =
            elegirDireccionDelta(caminos);
    }
}


    // actualizamos la posicion de la lechuga
    lechuga.style.left = lechugaX + "px";
    lechuga.style.top = lechugaY + "px";
}


// hacemos que la lechuga se mueva
setInterval(moverLechuga, 30);