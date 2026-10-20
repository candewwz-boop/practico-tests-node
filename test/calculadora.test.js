import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sumar, dividir } from '../src/calculadora.js';
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

test('dividir 10 / 2 devuelve 5', () => {
  assert.equal(dividir(10, 2), 5);
});

test('dividir 10 / 0 lanza un error', () => {
  // la llamada va dentro de () => para que assert atrape el error
  // si la llamo directo, el error salta antes
  assert.throws(() => dividir(10, 0), { message: 'No se puede dividir por cero' });
});