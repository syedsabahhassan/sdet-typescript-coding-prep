export function countSegments(s: string): number {

    let countOfSegments = 0;


    for (let i = 0; i < s.length; i++) {

        let currCharacter = s[i];

        if ((currCharacter !== ' ') && (i === 0 || s[i - 1] === ' ')) {

            countOfSegments++;
        }

    }

    return countOfSegments;

    // “I scan the string once. A segment begins when I see a non-space character that either is at index 0 or follows a space. I count these starts. This runs in O(n) time and O(1) space.”

};