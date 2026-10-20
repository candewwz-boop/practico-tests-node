// tests de notas.js
// describe agrupa los tests de cada funcion
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { clasificar } from '../src/notas.js';

describe('clasificar', () => {
  // pruebo los valores limite, que es donde suelen estar los bugs
  test('3.99 es LIBRE (justo debajo del límite 4)', () => {
    assert.equal(clasificar(3.99), 'LIBRE');
  });

  test('4 es REGULAR (límite exacto)', () => {
    assert.equal(clasificar(4), 'REGULAR');
  });

  test('5.99 es REGULAR (justo debajo del límite 6)', () => {
    assert.equal(clasificar(5.99), 'REGULAR');
  });

  test('6 es PROMOCIONA (límite exacto)', () => {
    assert.equal(clasificar(6), 'PROMOCIONA');
  });

  test('10 es PROMOCIONA (máximo válido)', () => {
    assert.equal(clasificar(10), 'PROMOCIONA');
  });

  test('11 lanza RangeError (fuera de rango)', () => {
    // 11 esta fuera de rango, tiene que tirar rangeerror
    assert.throws(() => clasificar(11), RangeError);
  });
});