import { countSegments } from "../week-1-strings/count-segments";


describe('Count Segments in a sentence or a string',()=>{
    test('Case 1',()=>{
        expect(countSegments("Hello, my name is John")).toBe(5);

    }),
    test('Case 2',()=>{
        expect(countSegments("     ")).toBe(0);
    }),

    test('Case 3',()=>{
        expect(countSegments("Hello")).toBe(1);
    })
})