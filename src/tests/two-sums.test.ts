
import { twoSum } from "../week-1-strings/two-sums";


describe("Two Sum", () => {
  test("basic case", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });

  test("handles empty array", () => {
    expect(twoSum([], 5)).toEqual([]);
  });
});
