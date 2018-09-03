/*jshint multistr:true */

var text = "Costy it's learn javascript Costy like learn";
var myName = "Costy";
var hits = [];
var i;

for(i = 0; i < text.length; i++){
    if(text[i] === 'C'){
        for(var j = i; j < (i + myName.length); j++){
            hits.push(text[j])
        }
    }
}

if(hits.length === 0) {
    console.log("Your name wasn't found");
}
else { 
    console.log(hits);
}