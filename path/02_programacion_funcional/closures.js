const variableGlobal = 'Fluffy';

const f = () => {
  const variableInterna = 'Kins';
  console.log(variableInterna, variableGlobal);
}

f();

console.log("---------------------------------------");

const crudder = dominio => recurso => {
  const url = `${dominio}/${recurso}`;

  return ({
    create: (x) => fetch(url, {
      method: 'POST',
      body: JSON.stringify(x)
    }).then(x => x.json()),
    get: () => fetch(url).then(x => x.json())
  })
}

const base = crudder('https://jsonplaceholder.typicode.com');
const todos = base('todos');
const users = base('users');

//todos.get().then(console.log);
todos.get().then(x => console.log(x[0]));
users.get().then(y => console.log(y[0]));