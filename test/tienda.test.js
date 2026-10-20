// tests de tienda.js
// la regla es: 10% de descuento si el total es 50000 o mas
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicarDescuento } from '../src/tienda.js';
 
test('40000 no tiene descuento y devuelve 40000', () => {
  // 40000 es menos que 50000, no hay descuento
  assert.equal(aplicarDescuento(40000), 40000);
});
 
test('60000 tiene 10% de descuento y devuelve 54000', () => {
  // 60000 menos el 10% da 54000
  assert.equal(aplicarDescuento(60000), 54000);
});
 
test('50000 (límite exacto) tiene descuento y devuelve 45000', () => {
  // este es el que encontro el bug: 50000 justo en el limite tiene que tener descuento
  assert.equal(aplicarDescuento(50000), 45000);
});