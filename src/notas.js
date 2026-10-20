export function clasificar(nota) {
if (nota < 0 || nota > 10) throw new RangeError('Nota fuera de rango');
if (nota >= 6) return 'PROMOCIONA';
if (nota >= 4) return 'REGULAR';
return 'LIBRE';
}
export function promedio(notas) {
  if (notas.length === 0) throw new Error('La lista de notas está vacía');
  return notas.reduce((acc, n) => acc + n, 0) / notas.length;
}