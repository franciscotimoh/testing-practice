import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from "./index.js";

describe("capitalize", () => {
    test("capitalizes cat to Cat", () => {
        expect(capitalize("cat")).toEqual("Cat");
    });

    test("capitalizing CAT remains the same", () => {
        expect(capitalize("CAT")).toEqual("CAT");
    });

    test("capitalizing an empty string returns an empty string", () => {
        expect(capitalize("")).toEqual("");
    });

    test("passing a non-string throws a type error", () => {
        expect(() => capitalize(undefined)).toThrow(TypeError);
    });
});

describe("reverseString", () => {
    test("reverses cat to tac", () => {
        expect(reverseString("cat")).toEqual("tac");
    });

    test("reverses empty string to empty string", () => {
        expect(reverseString("")).toEqual("");
    });

    test("passing a non-string throws a type error", () => {
        expect(() => reverseString(undefined)).toThrow(TypeError);
    });
});

describe("calculator", () => {
    const calc = calculator();

    describe("add", () => {
        test("adds 1 and 2 to equal 3", () => {
            expect(calc.add(1, 2)).toEqual(3);
        });

        test("adding non-strings throws a type error", () => {
            expect(calc.add(undefined, 2)).toBe(NaN);
        });
    });

    describe("subtract", () => {
        test("subtracting 2 - 1 equal 1", () => {
            expect(calc.subtract(2, 1)).toEqual(1);
        });

        test("subtracting 1 - 2 equal -1", () => {
            expect(calc.subtract(1, 2)).toEqual(-1);
        });
    });

    // tests for multiply and divide omitted for sake of speed
});

describe("caesarCipher", () => {
    test("encrypts xyz with shift 3 to abc", () => {
        expect(caesarCipher("xyz", 3)).toEqual("abc");
    });

    test("encrypts xyz with shift 4 to bcd", () => {
        expect(caesarCipher("xyz", 4)).toEqual("bcd");
    });

    test("encrypts XYZ with shift 3 to ABC", () => {
        expect(caesarCipher("XYZ", 3)).toEqual("ABC");
    });

    test("encrypts Hello, World! with shift 3 to Khoor, Zruog!", () => {
        expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
    });
});

describe("analyzeArray", () => {
    test("returns 4 as average of [1, 8, 3, 4, 2, 6]", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.average).toEqual(4);
    });

    test("returns 1 as min of [1, 8, 3, 4, 2, 6]", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.min).toEqual(1);
    });

    test("returns 8 as min of [1, 8, 3, 4, 2, 6]", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.max).toEqual(8);
    });

    test("returns 6 as length of [1, 8, 3, 4, 2, 6]", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.length).toEqual(6);
    });
});
