var friends = {
    bill:{
        firstName: "Bill",
        lastName: "Billstone",
        number: "665345764",
        address: ["C/ Alejandro Magno", "2A", "Málaga"]
    },
    
    steve:{
        firstName: "Steve",
        lastName: "Stevestone",
        number: "643457976",
        address: ["C/ Estafania Lorca", "33", "Cadiz"]
    },
    
    ale:{
        firstName: "Ale",
        lastName: "Alestone",
        number: "698452235",
        address: ["C/ Franco Belleza", "SN", "Cordoba"]
    }
}

var list = function (friends){
    for(var key in friends){
        console.log(key);
    }
}

var search = function (name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
}