import {countValidWords} from '../week-1-strings/countValidWords'

describe('Count the number of valid words in a sentence', () => {
  test('should return the correct count of valid words', () => {
    expect(countValidWords('cat and  dog')).toEqual(4);
 
  });

  test('should return 0 for an empty string', () => {
    expect(countValidWords('!this  1-s b8d!')).toEqual(4);
  });
  

});

/**
 *    expect(countValidWords('!this  1-s b8d!')).toBe(0);
    expect(countValidWords('alice and  bob are playing stone-game10')).toBe(5);
    expect(countValidWords('he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.')).toBe(6);
    expect(countValidWords('')).toBe(0);
    expect(countValidWords('   ')).toBe(0);
    expect(countValidWords('a b c d e f g h i j k l m n o p q r s t u v w x y z')).toBe(26);
 */
