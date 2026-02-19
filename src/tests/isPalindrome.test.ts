import {isPalindrome} from '../week-1-strings/isPalindrome';

describe('Check the string is Palindrome ignore non-alphanumeric characters', () => {
  test('should return true for a valid palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('should return false for an invalid palindrome', () => {
    expect(isPalindrome('race                a car')).toBe(false);                                   
    });
  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
  
  test('should return true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });   
  test('should return true for a palindrome with only non-alphanumeric characters', () => {
    expect(isPalindrome('!!!')).toBe(true);
  });
});
