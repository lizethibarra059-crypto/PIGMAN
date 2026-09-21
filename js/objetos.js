// temporizador del efecto de la soda
let temporizadorSoda;
// indica si los enemigos son vulnerables
let enemigosVulnerables = false;
// funcion para recoger las sodas
function recogerSodas() {

    const pigman = document.getElementById("pigman");
    const sodas = document.querySelectorAll(".soda");

    const pigmanRect = pigman.getBoundingClientRect();

    sodas.forEach(function(soda) {

        // si la soda ya fue recogida no hacemos nada
        if (soda.style.display === "none") return;

        const sodaRect = soda.getBoundingClientRect();

        // comprobamos si pigman toca la soda
        if (
            pigmanRect.right > sodaRect.left &&
            pigmanRect.left < sodaRect.right &&
            pigmanRect.bottom > sodaRect.top &&
            pigmanRect.top < sodaRect.bottom
        ) {

            soda.style.display = "none";

            console.log("pigman recogio una soda");
            // aumentamos la velocidad de pigman
            velocidad = 8;

            // los enemigos se vuelven vulnerables
            enemigosVulnerables = true;

            // cambiamos su apariencia por la pizza
            const enemigos = document.querySelectorAll(".enemigo");

            enemigos.forEach(function(enemigo) {
                enemigo.style.backgroundImage = 'url("assets/sprites/pizza.png")';
            });
            // cancelamos el temporizador anterior
            clearTimeout(temporizadorSoda);

            // despues de 6 segundos termina el efecto de la soda
            temporizadorSoda = setTimeout(function() {

              // pigman vuelve a su velocidad normal
               velocidad = 5;

                // los enemigos dejan de ser vulnerables
                enemigosVulnerables = false;

            }, 6000);
        }
    });
}
// contenedor donde se colocan las hamburguesas
const contenedorHamburguesas =
    document.getElementById("contenedor-hamburguesas");

// crea una fila horizontal de hamburguesas
function crearCaminoHorizontal(inicioX, finX, posicionY, separacion) {

    for (let x = inicioX; x <= finX; x += separacion) {

        const hamburguesa = document.createElement("div");

        hamburguesa.classList.add("hamburguesa");

        hamburguesa.style.left = x + "px";
        hamburguesa.style.top = posicionY + "px";

        contenedorHamburguesas.appendChild(hamburguesa);
    }
}
// crea una fila vertical de hamburguesas
function crearCaminoVertical(posicionX, inicioY, finY, separacion) {

    for (let y = inicioY; y <= finY; y += separacion) {

        const hamburguesa = document.createElement("div");

        hamburguesa.classList.add("hamburguesa");

        hamburguesa.style.left = posicionX + "px";
        hamburguesa.style.top = y + "px";

        contenedorHamburguesas.appendChild(hamburguesa);
    }
}
// primer camino de prueba
crearCaminoHorizontal(80, 300, 25, 40);
// camino vertical izquierdo
crearCaminoVertical(20, 25, 340, 40);
// camino horizontal izquierdo
crearCaminoHorizontal(20, 300, 340, 40);
// camino horizontal derecho
crearCaminoHorizontal(480, 780, 340, 40);
// camino superior derecho
crearCaminoHorizontal(500, 740, 25, 40);
// camino vertical derecho
crearCaminoVertical(780, 25, 340, 40);
// entrada izquierda hacia el interior
crearCaminoVertical(340, 220, 300, 40);
// entrada derecha hacia el interior
crearCaminoVertical(460, 220, 300, 40);
