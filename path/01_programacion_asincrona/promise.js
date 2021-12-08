const users = [
  {id:1, nombre: 'ricardo', profesionId: 1},
  {id:2, nombre: 'michaela', profesionId: 1},
  {id:3, nombre: 'vanessa', profesionId: 2}
]

const profesion = {
  1: 'programador',
  2: 'diseñador'
}

function getUsers(callbakc){
  return new Promise((resolved, reject) => {
      setTimeout(() => {
        resolved(users);
      }, 500)
  })
}

function getUser(id){
  return new Promise((resolved, reject) => {
    resolved(users.filter((user) => user.id === id)[0]);
  })
}

function getProfesion(id){
  return new Promise((resolved, reject) => {
    resolved(profesion[id]);
  })
}

getUsers()
  .then((users) => getUser(users[2].id))
  .then((usuario) => getProfesion(usuario.profesionId))
  .then((profesion) => console.log("Profesion " + profesion));
