var obj = { color: "red", width:200, height:300 };

var array = Object.keys( obj );

for( var i = 0; i < array.length; i++ ){
    
    console.log(array[i]);
    
}

//mostrar los valores
for( var i = 0; i < array.length; i++ ){
    
    console.log( obj[ array[i] ] );
    
}