const _ = require('lodash');
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const users = [
  {id: 1, nombre: 'Constantin', apellidos: 'Brindusoiu'}
]

const head = x => x[0];
const capitalizaNombreApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido)
});

const generaNombre = x => `${x.nombre} ${x.appelido}`;

const getNombreCompleto = (_users) => {
  return generaNombre(capitalizaNombreApellido(head(_users)));
}

// hace lo mismo el compose que la función de arriba
// esto se conoce también como point free
const getNombreCompleto = compose(generarNombre, capitalizaNombreApellido, head);

const x = getNombreCompleto(users);
console.log(x);