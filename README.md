![Tests](https://github.com/candewwz-boop/practico-tests-node/actions/workflows/tests.yml/badge.svg)
# practico-tests-node

Ejercicio 4

El compañeor no encontro el bug porque probó 40000 y 60000 que están lejos del límite, el error estaba justo en 50000 (usaba `>` en vez de `>=`) y ese valor exacto nunca lo probó