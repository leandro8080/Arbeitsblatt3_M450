const { divide } = require("./divide");
test("Divide 10 by 5", () => {
	expect(divide(10, 5)).toBe(2);
});

test("Divide 10 by 0", () => {
	expect(divide(10, 0)).toBe("b is not a number or 0");
});
