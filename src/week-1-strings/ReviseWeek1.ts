function lengthOfLastWord(s: string): number {


//skip trailing spaces
    let i = s.length-1;

    while(i>=0 && s[i] === ' '){
        i--;
    }

    let length = 0;

    while(i>0 && s[i]!== ' '){
        length++;
        i--;

    }

    return length;


}


function reverseWords(s:string):string{

    return s.split(' ')
            .map(word=>word.split('').reverse().join(''))
            .join(' ')

}