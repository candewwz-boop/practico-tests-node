# practico-tests-node

## Ejercicio 4

## Ejercicio 4

No encontró el bug porque probó 40000 y 60000 que están lejos del límite, el error estaba justo en 50000 (usaba `>` en vez de `>=`) y ese valor exacto nunca lo probó