
//var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
//    var alphabet = "abcdefghijklmnopqrstuvwxyz"
//    var splitAlphabet = alphabet.split("")


function forception(people, alphabet){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var splitAlphabet = alphabet.split("");
    var spliced =[]

    for(var i = 0; i < people.length; i++){        
        for (var j = 0; j <= alphabet.length; j++){  
            spliced.push(people[i ++] + " " + splitAlphabet);
            console.log(spliced)       
        }

    return;    
    }
}
    console.log(forception())