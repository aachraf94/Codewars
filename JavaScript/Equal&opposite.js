/**
 * Equal and opposite
 * Simple: find two values a and b such that a == b, !a is true, and !b is false.
    No strings allowed.
 */

    let a = 0,
    b= [];

    const Test = require('@codewars/test-compat');

    describe("Tests", () => {
    it("test", () => {
    function test(a, b) {
    return a == b && !a && !!b;
    }

    Test.expect(test(a, b), "Values given not equal and opposite.")
    });
    });