# Tubazo

Juego de surf en tercera persona para celular y PC. Remás acostado, elegís una ola de la serie, te parás y la surfeás.

## Cómo jugar

Jugalo en https://matiasmoranc.github.io/tubazo/ o abrí `index.html` en el navegador. Para probarlo en el celular desde tu PC, corré el servidor y entrá a la dirección que muestra:

```bash
node servidor.js
```

## Jugar con amigos

Tocá **Jugar online**. Entrás solo a la playa donde ya hay gente, sin códigos. Si no hay nadie, tu partida queda abierta para el próximo que entre. Cada playa tiene lugar para 8 surfistas.

Comparten las olas, se ven en el agua y, si chocan fuerte, se caen los dos. La conexión es directa entre los teléfonos: PeerJS, un servicio público y gratuito, solo los presenta. Si se va quien abrió la playa, otro jugador la reabre solo.

## Controles

| Momento | Gesto | Qué hace |
|---|---|---|
| Remando | Tocar izquierda y derecha con ritmo | Una brazada por toque |
| Remando | Arrastrar el dedo | La tabla mira hacia ese lado |
| Remando | Poner dos dedos mirando al mar | Pasás la espuma por abajo |
| Tomando la ola | Mirar a la orilla y remar fuerte | La ola te levanta |
| Al aparecer ¡Parate! | Tocar la pantalla | Te parás |
| En la ola | Apuntar con un dedo | La tabla va hacia ahí |
| En la ola | Soltar | Mantiene la altura |
| En la ola | Segundo dedo | Frena y arrastra la cola |
| En la ola | Bajar | Da velocidad, y más cuanto más alto arrancás |

En la PC: ← → remar, ↑ ↓ mirar, ↑ pararse. En la ola: flechas apuntan, Espacio frena, A y D cola, P pausa.

## Física

La tabla se mueve con fuerzas reales: gravedad según la inclinación de la cara, agua que sube por la ola y canto que agarra. Por eso hay una línea de trim: alto te adelantás, abajo te alcanza la ola. La inclinación del cuerpo dobla la tabla, la cola la hace derrapar y frenar te mete al tubo.

## Maniobras

Romper el labio, derrapes de cola, cutback, rebote en la espuma, snap, floater, tubo, aéreos y giros en el aire.

## Archivos

- `index.html`: el juego en tercera persona.
- `tubazo-primera-persona.html`: la versión anterior, en primera persona.
- `tubazo-lateral.html`: la primera versión, vista de costado.
- `servidor.js`: servidor local para abrirlo desde el celular.
