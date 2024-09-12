const {
	getLastElement,
	isPalindrome,
	capitalizeWords,
	lengthOfLongestWord
} = require("./formatting.js");

describe("getLastElement", () => {
	test("Array with 5 Elements", () => {
		const testArray = [true, "Höh", 12, 4141, "Cool String"];

		const result = getLastElement(testArray);
		expect(result).toBe("Cool String");
	});
});

describe("isPalindrome", () => {
	test("The word 'radar'", () => {
		const result = isPalindrome("Radar");
		expect(result).toBe(true);
	});
});

describe("capitalizeWords", () => {
	test("The sentence 'i am leandro schultze'", () => {
		const result = capitalizeWords("i am leandro schultze");
		expect(result).toBe("I Am Leandro Schultze");
	});
});

describe("lenthOfLongestWord", () => {
	test("The sentence 'i am leandro schultze'", () => {
		const result = lengthOfLongestWord("i am leandro schultze");
		expect(result).toBe(8);
	});
});
