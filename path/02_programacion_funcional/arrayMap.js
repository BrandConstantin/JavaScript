const numeros = [1,2,3,4];

const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados);

const parejas = numeros.map(x => [x,x]);
console.log(parejas);

const mascotas = [
  {nombre: 'Leon', edad: 12, raza: 'perro'},
  {nombre: 'Layla', edad: 6, raza: 'perro'},
  {nombre: 'Ricky', edad: 2, raza: 'perro'},
  {nombre: 'Pelusin', edad: 15, raza: 'gato'},
];

const suma = (num) => {
  let acumulado = 0;
  for(i = 0; i < num.length; i++){
    acumulado += num[i];
  }
  return acumulado;
}

const result1 = suma(numeros);
console.log(result1);

const edades = mascotas.map(x => x.edad);
console.log(edades);
const result2 = suma(edades);
console.log(result2);