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
    setTimeout(() => {
      callbakc(null, users);
    }, 500)
}

//getUsers((err, users) => console.log(users));
function getUser(id, callback){
    callback(null, users.filter((user) => user.id === id)[0]);
}

function getProfesion(id, callback){
    callback(null, profesion[id]);
}

getUsers((err, users) => {
    if(err) {return huboError(err);}
    const userId = users[2].id;

    getUser(userId, (err, user) => {
        const profesionId = user.profesionId;

        getProfesion(profesionId, (err, profesion) => {
            console.log("Profesion: " + profesion);
        })
    })
})