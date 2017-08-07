var array = [ 
    "string",
    "hello",
    "world200",
    100,
    function(){ return "drive"; },
];

// Assignment
array[0] = "New string";
array[0] += "concat";

// Methods
array.shift(); // Delete's first element
array.pop(); // Delete's last element

// Add new values to the beginning of the array
array.unshift( "new", "values" );

// Add new values to the end of the array
array.push( "ending", "values" );

// Splice can do anything remember
// splice( point 2 es de donde empieza, delete 2 cuantos elementos quieres eliminar)
array.splice( 2, 2);
// splice( point 2 es de donde empieza, delete 0 porque no queremos eliminar nada, "hello" para añadir)
array.splice( 2, 0, "hello");