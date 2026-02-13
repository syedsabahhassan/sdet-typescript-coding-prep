// function twoSum(nums: number[], target: number): number[] {

//     //T: ((n^2)
//     //SL: O(n)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {

//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
//     return []
// }


// T: O(n)
// S: 0(n)
export function twoSum(nums: number[], target: number): number[] {
   
    //number: index(in nums)
    const complements = new Map<number,number>();
 
    for(let i=0;i<nums.length;i++){
        const complement = target - nums[i];
        if(complements.has(complement)) 
        return [complements.get(complement)!,i];

        complements.set(nums[i],i);

    }
    return [];
}
/**
“I iterate through the array once. For each number x, I compute target - x as the complement. If the complement is already in a hash map, that means I previously saw it and I can return its index along with the current index. If not, I store the current number and its index in the map. This gives O(n) time and O(n) space.” */

/**“I traverse the array once. For each element x, I compute the complement target - x and check if the complement exists in a map of previously seen numbers to indices. If it exists, I return the stored index and current index. Otherwise I store x with its index. This is O(n) time and O(n) space.”  */