var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying == true){
    if(youHit == 1){
        console.log("Congratulation you hit the dragon!");
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4){
            console.log("You defeted the dragon! Congratulation!");
            slaying = false;
        }else{
            youHit = Math.floor(Math.random() * 2);
        }
    }else{
        console.log("The dragon defeated you!");
    }
    slaying = false;
}