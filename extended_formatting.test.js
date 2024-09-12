const {
	uniqueValues,
	letterFrequency,
	sortByKey,
	deepClone,
	intersection
} = require("./extended_formatting");

describe("uniqueValues", () => {
	test("should return unique values from an array", () => {
		expect(uniqueValues([1, 1, 2, 3, 4, 4, 5])).toEqual([2, 3, 5]);
		expect(uniqueValues([7, 7, 7, 7])).toEqual([]);
		expect(uniqueValues([1, 2, 3])).toEqual([1, 2, 3]);
		expect(uniqueValues([])).toEqual([]);
	});
});

describe("letterFrequency", () => {
	test("should return frequency of each letter in a word", () => {
		expect(letterFrequency("abccd")).toEqual({ a: 1, b: 1, c: 2, d: 1 });
		expect(letterFrequency("aabb")).toEqual({ a: 2, b: 2 });
		expect(letterFrequency("")).toEqual({});
	});
});

describe("sortByKey", () => {
	test("should sort objects by a given key", () => {
		const people = [
			{ name: "Max", age: 30 },
			{ name: "Anna", age: 25 },
			{ name: "Chris", age: 28 }
		];
		const sorted = [
			{ name: "Anna", age: 25 },
			{ name: "Chris", age: 28 },
			{ name: "Max", age: 30 }
		];
		expect(sortByKey(people, "age")).toEqual(sorted);
	});

	test("should return an empty array if input is empty", () => {
		expect(sortByKey([], "age")).toEqual([]);
	});
});

describe("deepClone", () => {
	test("should return a deep clone of the object", () => {
		const original = {
			name: "Max",
			details: { age: 30, hobbies: ["reading", "coding"] }
		};
		const clone = deepClone(original);

		expect(clone).toEqual(original);
		expect(clone).not.toBe(original);
		expect(clone.details).not.toBe(original.details);
	});

	test("should handle arrays and objects", () => {
		const array = [1, 2, { name: "Test" }];
		const clonedArray = deepClone(array);

		expect(clonedArray).toEqual(array);
		expect(clonedArray).not.toBe(array);
	});
});

describe("intersection", () => {
	test("should return the intersection of two arrays", () => {
		expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
		expect(intersection([7, 8], [1, 2])).toEqual([]);
		expect(intersection([], [1, 2])).toEqual([]);
	});
});
