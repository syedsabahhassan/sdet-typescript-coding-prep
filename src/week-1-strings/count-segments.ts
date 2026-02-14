export function countSegments(s: string): number {

    let countOfSegments = 0;


    for (let i = 0; i < s.length; i++) {

        let currCharacter = s[i];

        if ((currCharacter !== ' ') && (i === 0 || s[i - 1] === ' ')) {

            countOfSegments++;
        }

    }


    return countOfSegments;

};