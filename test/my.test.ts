// test/dummy.test.ts

describe('Dummy Function Test', () => {
    // Define a simple function within the test file
    const multiply = (a: number, b: number): number => {
        return a * b;
    };

    it('should correctly multiply two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});
