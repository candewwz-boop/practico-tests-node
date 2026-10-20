import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sumar } from '../src/calculadora.js';
test('sumar 2 + 3 devuelve 5', () => {
// Arrange (preparar): los datos de entrada
const a = 2;
const b = 3;
// Act (ejecutar): llamar a la función
const resultado = sumar(a, b);
// Assert (verificar): comparar con lo esperado
assert.equal(resultado, 5);
});

test('sumar -4 + 1 devuelve -3', () => {
  // pruebo con un numero negativo
  const resultado = sumar(-4, 1);
  assert.equal(resultado, -3);
});
