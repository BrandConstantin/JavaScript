const numeros = [1,2,3,4,5,6,7,8,9];

const mascotas = [
  {nombre: 'Leon', edad: 12, raza: 'perro'},
  {nombre: 'Layla', edad: 6, raza: 'perro'},
  {nombre: 'Ricky', edad: 2, raza: 'perro'},
  {nombre: 'Pelusin', edad: 15, raza: 'gato'},
];

const numerosFiltrados = numeros.filter(x => x < 5);
console.log(numerosFiltrados);
const animalesFiltrados = mascotas.filter(y => y.raza == 'perro' && y.edad < 10);
console.log(animalesFiltrados);
