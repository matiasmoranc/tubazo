# Tubazo

Juego de surf en primera persona para celular y PC. Ves la tabla y tus pies, y manejás con dos dedos como si los tuvieras apoyados sobre ella.

## Cómo jugar

Jugalo en https://matiasmoranc.github.io/tubazo/ o abrí `index.html` en el navegador. Para probarlo en el celular, corré el servidor y entrá a la dirección que muestra, con el teléfono en la misma wifi que la PC:

```bash
node servidor.js
```

## Controles

| Gesto | Qué hace |
|---|---|
| Mover de costado el dedo de adelante | Marca la dirección |
| Arrastrar la cola con el dedo de atrás | Dobla más cerrado y frena |
| Girar a fondo | La tabla sigue dando la vuelta y volvés hacia atrás |
| Separar los dedos | Inclina la tabla hacia adelante y acelera |
| Juntar los dedos | Inclina la tabla hacia atrás y frena |
| Bajar de la ola | Da velocidad, y más cuanto más alto arrancás |

En la PC: ← → dirección, A y D cola, ↑ acelerar, ↓ frenar, P pausa.

## Maniobras

Cutback, rebote en la espuma, snap, floater, tubo, aéreos y giros en el aire de 180° o más.

## Archivos

- `index.html`: el juego en primera persona.
- `tubazo-lateral.html`: la primera versión, vista de costado.
- `servidor.js`: servidor local para abrirlo desde el celular.
