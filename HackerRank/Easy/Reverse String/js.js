function reverseString(s) {
    try{
            /*var splitS = s.split("");
            var reverseSplit = splitS.reverse();
            var joinSplit = reverseSplit.join("");*/

            console.log(s.split('').reverse().join(''));        
    }catch(error){
        console.log(error.message);
        console.log(s);
    }
}