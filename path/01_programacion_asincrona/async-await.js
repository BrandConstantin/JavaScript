const fetch = require('node-fetch');

async function getNombre(username){
  const url = 'https://api.github.com/users/${username}'
  const respuesta = await fetch(url);
  const json = await respuesta.json();

  if(respuesta.status !== 200){
    throw Error('El usuario no existe');
  }
  return json.name;
}

(async function(){
  try{
    const nombre = await getNombre('rickitan');
    console.log(nombre);
  }catch(e){
    console.log('Error: ${e}');
  }
})

/*
getNombre('rickitan')
  .then((nombre) => console.log(nombre))
  .catch((e) => console.log('Error: ${e}'));
*/
