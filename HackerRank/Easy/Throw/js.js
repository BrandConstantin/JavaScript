function isPositive(a) {
    var message = "";

    if(a < 0){
        throw new Error('Negative Error');
    }else if(a == 0){
        throw new Error('Zero Error');
    }else{
       return message = "YES";  
    }    
}


function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}