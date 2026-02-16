
/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): string[] {
    //initialize two pointers

    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        // let temp = s[left];
        // s[left] = s[right];
        // s[right] = temp;

        //Destructuring Swap looks cool but it is slightly slower than above temp varaiable swapping 
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;

    }
    return s;
};