// Define quarter here.
var quarter = function (number){
    var number = number / 4;
    return number;
}

if (quarter(300) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}