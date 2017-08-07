var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

console.log( car.make );
console.log( car.engine.fuel );
console.log(car.drive());
console.log(car.engine.pistons[1]);
console.log(car.engine.pistons[1].maker);
console.log(array[4]());
console.log(car["make"]);
console.log(car["engine"]["pistons"][1]["maker"]);

//crear metodos
car.make = "ford";
car.model = "v52";
car.stop = function(){return "stop";};

//borrar metodos
delete car.model