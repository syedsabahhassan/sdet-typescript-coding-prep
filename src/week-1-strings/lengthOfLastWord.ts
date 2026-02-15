export function lengthOfLastWord(s: string): number {

    //Brute force

    // let setOfWords=s.trim().split(' ');

    //  return setOfWords[setOfWords.length - 1].length;

    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // Count last word
    let length = 0;
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;      

};

