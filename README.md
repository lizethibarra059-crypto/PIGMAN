# PIGMAN

## Descripción

PIGMAN es un videojuego inspirado en Pac-Man y ambientado en una granja. El jugador controla a un cerdito que debe recorrer distintos escenarios, recolectar objetos y evitar a diferentes enemigos, cada uno con un comportamiento propio.

## Estado del proyecto

Proyecto terminado y funcional.

## Integrantes

- Lizeth Alejandra Ibarra Frausto
- Alan Gael Lopez Chavarria

## Objetivo del videojuego

El objetivo de PIGMAN es recorrer el laberinto y recolectar todas las hamburguesas mientras se evitan los enemigos. El jugador cuenta con tres vidas y puede utilizar diferentes objetos que le proporcionan ventajas durante la partida.

El videojuego cuenta con tres niveles de dificultad progresiva. Conforme se avanza de nivel, aumenta la cantidad de hamburguesas, disminuye la cantidad de sodas disponibles y aumenta la velocidad de los enemigos.

## Controles

- Flecha arriba: mover a PIGMAN hacia arriba.
- Flecha abajo: mover a PIGMAN hacia abajo.
- Flecha izquierda: mover a PIGMAN hacia la izquierda.
- Flecha derecha: mover a PIGMAN hacia la derecha.
- Botón de pausa: pausa la partida y permite reanudar o reiniciar el nivel.
- Botón de sonido: permite activar o desactivar la música del videojuego.

## Objetos del juego

- Hamburguesa: es el objeto principal que PIGMAN debe recolectar. Cada hamburguesa suma 10 puntos y es necesario recogerlas todas para completar el nivel.
- Soda: aumenta temporalmente la velocidad de PIGMAN y hace vulnerables a los enemigos durante 6 segundos. Mientras son vulnerables, cambian su apariencia a una pizza y PIGMAN puede comerlos.
- Corazón: permite recuperar una vida cuando PIGMAN tiene menos de 3 vidas.
- Portal: permite a PIGMAN trasladarse de un extremo del laberinto al otro.

## Enemigos

PIGMAN cuenta con cuatro enemigos, cada uno con un comportamiento diferente:

- Zanahoria (Alpha): persigue a PIGMAN tratando de acercarse directamente a su posición.
- Brócoli (Beta): intenta anticiparse al movimiento de PIGMAN para interceptar su camino.
- Jitomate (Gamma): tiene un comportamiento impredecible, combinando movimientos aleatorios con intentos de acercarse a PIGMAN.
- Lechuga (Delta): tiene un comportamiento estratégico; persigue a PIGMAN cuando se encuentra lejos, pero se aleja cuando está demasiado cerca.

## Tecnologías utilizadas

- HTML5: estructura y elementos principales del videojuego.
- CSS3: diseño, estilos y apariencia visual.
- JavaScript: lógica del juego, movimiento, colisiones, enemigos, objetos, niveles y sistema de puntuación.
- Git: control de versiones del proyecto.
- GitHub: almacenamiento y colaboración del repositorio.
- Visual Studio Code: desarrollo y edición del código.

## Requisitos

Para ejecutar PIGMAN se necesita:

- Un navegador web actualizado, como Google Chrome, Microsoft Edge o Firefox.
- Tener descargados todos los archivos y carpetas del proyecto.
- Mantener la estructura original de las carpetas para que las imágenes, sonidos y archivos del juego carguen correctamente.

## Instalación

1. Descargar o clonar el repositorio de PIGMAN.
2. Guardar todos los archivos manteniendo la estructura original de las carpetas.
3. Abrir la carpeta del proyecto en Visual Studio Code.

## Ejecución

1. Abrir el archivo `index.html`.
2. Ejecutarlo en un navegador web.
3. Presionar el botón **INICIAR JUEGO** para comenzar a jugar.

## Estructura del proyecto

PIGMAN está organizado de la siguiente manera:

- `assets/`: contiene los recursos utilizados por el videojuego.
  - `sprites/`: imágenes de PIGMAN, enemigos, objetos, escenario y demás elementos gráficos.
  - `musica/`: música de fondo y efectos de sonido.
- `css/`: contiene el archivo de estilos del videojuego.
- `js/`: contiene los archivos JavaScript encargados de la lógica y funcionamiento del juego.
- `server/`: carpeta destinada a los archivos relacionados con el servidor.
- `index.html`: archivo principal desde el cual se ejecuta el videojuego.
- `README.md`: documentación general del proyecto.

## Niveles

PIGMAN cuenta con tres niveles que utilizan el mismo laberinto, pero aumentan progresivamente su dificultad:

- Nivel 1: dificultad inicial, con la cantidad normal de hamburguesas, sodas y velocidad de los enemigos.
- Nivel 2: aumenta la cantidad de hamburguesas, disminuye la cantidad de sodas y aumenta la velocidad de los enemigos.
- Nivel 3: aumenta nuevamente la cantidad de hamburguesas, se reducen aún más las sodas disponibles y los enemigos alcanzan su mayor velocidad.

Al completar el tercer nivel, el jugador termina la partida y se muestra la pantalla de **¡JUEGO COMPLETADO!**.