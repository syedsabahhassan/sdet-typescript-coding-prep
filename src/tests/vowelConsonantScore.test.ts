import { vowelConsonantScore} from "../week-1-strings/vowelConsonantScore";

describe("vowelConsonantScore", () => {
    it("should return the correct score for a string with both vowels and consonants", () => {
        expect(vowelConsonantScore("cooear")).toBe(2);
        expect(vowelConsonantScore("axeyizou")).toBe(1);
        expect(vowelConsonantScore("au 123")).toBe(0);
        expect(vowelConsonantScore("bcdfg")).toBe(0);
    });

    it("should return 0 for a string with no vowels or no consonants", () => {
        expect(vowelConsonantScore("aeiou")).toBe(0);
        expect(vowelConsonantScore("bcdfg")).toBe(0);
        expect(vowelConsonantScore("")).toBe(0);
    });

    it("should be case insensitive", () => {
        expect(vowelConsonantScore("HeLLo")).toBe(0);
        expect(vowelConsonantScore("WoRLD")).toBe(0);
    });
});