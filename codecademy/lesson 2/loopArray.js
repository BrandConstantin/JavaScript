// Write your code below!

var array = ["one", "two", "three", "four", "five", "six"];
var i;

for(i = 0; i < array.length; i++){
    console.log(array[i]);
}

while(i < array.length){
    console.log(array[i]);
    i++;
}

do{
    console.log(array[i]);
    i++;
}while(i < array.length);