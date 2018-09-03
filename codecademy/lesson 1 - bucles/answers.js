var answer = prompt("Hola que tal estas?").toUpperCase();

switch(answer){
    case 'MUY BIEN':
        console.log("Tienes el animo por los aires!");
        var answer2 = prompt("La musica te hace sentir bien?").toUpperCase();
        var answer3 = prompt("Te gusta el chocolate?").toUpperCase();
        if(answer2 == 'SI' && answer3 == 'SI'){
            console.log("Entonce sigue escuchando lo que más te guste u comiendo chocolate");
        }else{
            if(answer2 = 'PUEDE'){
                console.log("Tienes que probar escuchar musica");
            }else if(answer2 == 'NO'){
                var odiarMusica = true;
                var answer4 = prompt("Odias la musica?");
                
                if(answer4 == 'SI' || answer4 == 'si'){
                    console.log("Deja de escucuchar musica ya!");
                }else{
                    console.log("Todavia hay remedio de que convencerte que la musica es buena");
                }
            }else{
                console.log("No te entiendo");
            }
            
        }
    break;
    case 'BIEN':
        console.log("Me alegro que te va bien");
    break;
    case 'REGULAR':
        console.log("Siempre hay que lo pasan peor, venga, animo!!");
    break;
    case 'MAL':
        console.log("Vamos, es obligatorio animarse!");
    break;
    default:
        console.log("Cualquier otra respuesta no la entiendo!");
    break;
}