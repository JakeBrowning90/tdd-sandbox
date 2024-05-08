const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./assignment") 
//const functionName = require(./assignment);

// test('expected outcome', () => {
//     expect(functionName(arguments)).toBe(result);
// });

test("capitalize 'cat' as 'Cat'", () => {
    expect(capitalize("cat")).toBe("Cat");
});

test("capitalize 'dOG' as 'DOG'", () => {
    expect(capitalize("dOG")).toBe("DOG");
});

test("reverse 'apple' as 'elppa'", () => {
    expect(reverseString("apple")).toBe("elppa");
});

test("reverse 'Fruit Salad' as 'dalaS tiurF'", () => {
    expect(reverseString("Fruit Salad")).toBe("dalaS tiurF");
});

test("calculator adds 7 and 5 to equal 12", () => {
    expect(calculator.add(7, 5)).toBe(12);
});

test("calculator subtracts 12 - 7 to equal 5", () => {
    expect(calculator.subtract(12, 7)).toBe(5);
});

test("calculator multiplies 5 and 4 to equal 20", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
});

test("calculator divides 12 by 2 to equal 6", () => {
    expect(calculator.divide(12, 2)).toBe(6);
});

test("1 encrypts 'apple' as 'bqqmf'", () => {
    expect(caesarCipher('apple', 1)).toBe('bqqmf');
});

test("1 encrypts 'Hello, World!' as 'Ifmmp, Xpsme!'", () => {
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
});

test("1 encrypts 'Zipping Zebras!' as 'Ajqqjoh Afcsbt!'", () => {
    expect(caesarCipher('Zipping Zebras!', 1)).toBe('Ajqqjoh Afcsbt!');
});

test("calculate average, min, max, and length of array", () => {
    expect(analyzeArray([0])).toEqual({average:0, min:0, max:0, length:1});
});

test("calculate average, min, max, and length of array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average:4, min:1, max:8, length:6});
});

