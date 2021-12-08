const numeros = [1,2,3,4];
const resultado = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(resultado);

const mascotas = [
  {nombre: 'Leon', edad: 12, raza: 'perro'},
  {nombre: 'Layla', edad: 6, raza: 'perro'},
  {nombre: 'Ricky', edad: 2, raza: 'perro'},
  {nombre: 'Pelusin', edad: 15, raza: 'gato'},
];

const indexed = mascotas.reduce((acum, elem) => ({
  ...acum,
  [elem.nombre]: elem,
}), {});
console.log(indexed);
console.log(indexed['Layla']);

const anidado = [1, [2, 3], 4, [5]];
const elementoPlano = anidado.reduce((acum, elem) => acum.concat(elem), []);
console.log(elementoPlano);