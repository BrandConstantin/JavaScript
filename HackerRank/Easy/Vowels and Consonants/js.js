function vowelsAndConsonants(s) {
    //var output = s.split('\n');
    var vowel_list = 'aeiouAEIOU';
    var vowels = "";
    var consonants = "";

    for(var x = 0; x < s.length; x++){
        if(vowel_list.indexOf(s[x]) != -1){
            vowels += s[x];
        }else{
            consonants += s[x];
        }
    }

    for(var x = 0; x < vowels.length; x++){
        console.log(vowels[x]);
    }
    for(var x = 0; x < consonants.length; x++){
        console.log(consonants[x]);
    }
    
}