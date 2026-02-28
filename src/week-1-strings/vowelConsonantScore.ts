export function vowelConsonantScore(s: string): number {

     const vowels = ["a","e","i","o","u"];
    
    s = s.toLowerCase();

    let countOfVowels=0;
        let countOfConsonant=0;
    for(let char of s){
        if(vowels.includes(char)){
            countOfVowels++;
        }else if(char >= "a" && char <= "z"){
            countOfConsonant++;
        }
     }

    if(countOfVowels===0 || countOfConsonant===0){
        return 0;
    } else {
        return Math.floor(countOfVowels/countOfConsonant);
    }

};