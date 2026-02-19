export function isPalindrome(s: string): boolean {
/*
//First approach: Remove non-alphanumeric characters, convert to lowercase, and check if the cleaned string is the same as its reverse.
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, ''); 
  //first we clean the string by converting it to lowercase and removing all non-alphanumeric characters using a regular expression. 
  // This ensures that we only consider letters and numbers when checking for palindromes.
  const reversed = cleaned.split('').reverse().join(''); 
  //Now we reverse the cleand string by first splitting it into an array of characters, reverse the array and then later join the   characters back into a string. 
  return cleaned === reversed;
*/


//Second approach: Use two pointers to compare characters from the start and end of the string,
//  moving towards the center while skipping non-alphanumeric characters.

    let left = 0;
    let right = s.length-1;

  while (left < right) {
    // Move the left pointer inward until an alphanumeric character is found
    while (left < right && !isAlphaNumeric(s[left])) { //
      left++;
    }
    // Move the right pointer inward until an alphanumeric character is found
    while (left < right && !isAlphaNumeric(s[right])) { //
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) { //
      return false;
    }

    // Move both pointers inward
    left++;
    right--;
  }

  return true;
  // Helper function to check if a character is alphanumeric
function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numeric (0-9)
    (code >= 97 && code <= 122) || // Lowercase letters (a-z)
    (code >= 65 && code <= 90)    // Uppercase letters (A-Z)
  );
}
}

