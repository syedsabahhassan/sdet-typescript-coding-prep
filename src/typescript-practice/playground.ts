const exampleFrequencyMap = function exampleFrequencyMap() {

    console.log('It works')


}


exampleFrequencyMap();

function frequencyDemo(): void {
    const s = "banana";

    const freq = new Map<string, number>();
    for (const ch of s) {

        freq.set(ch, (freq.get(ch) ?? 0) + 1);
    }

    console.log(freq);
}

frequencyDemo();

function setMembershipDemo():void{
    const nums = [1,2,3,4,2,1,4,3];
    const seen = new Set<number>();

    for(const num of nums){
        if(seen.has(num)){
            console.log("Duplicate",num);
            return;
        }
        seen.add(num);
    }


}

setMembershipDemo();

// =============================
// 3. Two Pointers
// =============================
function twoPointersDemo(): void {
    const s = "racecar";

    let left = 0;
    let right = s.length - 1;

    let isPalindrome = true;

    while (left < right) {
        if (s[left] !== s[right]) {
            isPalindrome = false;
            break;
        }

        left++;
        right--;
    }

    console.log(isPalindrome);
}
twoPointersDemo();
// =============================
// 4. Hash Map Complement
// =============================
function hashMapComplementDemo(): void {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (seen.has(need)) {
            console.log([seen.get(need), i]);
            return;
        }

        seen.set(nums[i], i);
    }
}

// =============================
// 5. Reverse Scan
// =============================
function reverseScanDemo(): void {
    const s = "Hello World";

    let i = s.length - 1;
    let count = 0;

    while (i >= 0 && s[i] === " ") i--;

    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }

    console.log(count);
}

// =============================
// 6. Stack
// =============================
function stackDemo(): void {
    const input = "abc";

    const stack: string[] = [];

    for (const ch of input) {
        stack.push(ch);
    }

    console.log(stack.pop());
}

// =============================
// 7. Running Sum
// =============================
function runningSumDemo(): void {
    const nums = [1, 2, 3, 4];

    let running = 0;

    for (const num of nums) {
        running += num;
        console.log(running);
    }
}

// =============================
// 8. Missing Number Formula
// =============================
function missingNumberDemo(): void {
    const nums = [0, 1, 3];

    const n = nums.length;

    const expected = (n * (n + 1)) / 2;
    const actual = nums.reduce((a, b) => a + b, 0);

    console.log(expected - actual);
}

// =============================
// 9. Fibonacci Rolling DP
// =============================
function fibonacciDemo(): void {
    const n = 8;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    console.log(b);
}

// =============================
// 10. Character Validator
// =============================
function validatorDemo(): void {
    const isDigit = (ch: string) =>
        ch >= "0" && ch <= "9";

    console.log(isDigit("5"));
}

// =============================
// 11. Sort
// =============================
function sortDemo(): void {
    const nums = [5, 1, 4, 2];

    nums.sort((a, b) => a - b);

    console.log(nums);
}