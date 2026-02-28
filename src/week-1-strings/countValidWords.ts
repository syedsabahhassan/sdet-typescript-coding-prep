export function countValidWords(sentence: string): number {

    let setOfWords = sentence.trim().split(' ');

    return setOfWords.length;

    let token = "";
    for (let i = 0; i < sentence.length; i++) {

        if (sentence[i] === " ") {

        } else {
            token += token;

        }


    }

};