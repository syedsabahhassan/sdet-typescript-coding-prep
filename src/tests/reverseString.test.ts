import { reverseString } from "../week-1-strings/reverseString";


describe("reverseString", () => {

    test("should reverse the string in place", () => {
        const input = ["h", "e", "l", "l", "o"];
        const expectedOutput = ["o", "l", "l", "e", "h"];
        expect(reverseString(input)).toEqual(expectedOutput);
    });

    test("should handle an empty string", () => {
        const input: string[] = [];
        const expectedOutput: string[] = [];
        expect(reverseString(input)).toEqual(expectedOutput);
    });

    test("should handle a single character string", () => {
        const input = ["a"];
        const expectedOutput = ["a"];
        expect(reverseString(input)).toEqual(expectedOutput);
    });

    test("should handle a string with spaces", () => {
        const input = [" ", " ", "a", " ", "b", " ", "c", " ", " "];
        const expectedOutput = [" ", " ", "c", " ", "b", " ", "a", " ", " "];
        expect(reverseString(input)).toEqual(expectedOutput);
    });

});
