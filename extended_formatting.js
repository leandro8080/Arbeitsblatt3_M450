function uniqueValues(array) {
	const uniqueValuesOfArray = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < uniqueValuesOfArray.length; j++) {
			if (array[i] === uniqueValuesOfArray[j]) {
				array.splice(i, 1);
				uniqueValuesOfArray.splice(j, 1);
			}
		}
		if (array[i]) {
			uniqueValuesOfArray.push(array[i]);
		}
	}
	return uniqueValuesOfArray;
}

function letterFrequency(word) {
	const frequency = {};
	const wordArray = word.split("");
	for (let i = 0; i < wordArray.length; i++) {
		const letter = wordArray[i];
		if (frequency[letter]) {
			frequency[letter]++;
		} else {
			frequency[letter] = 1;
		}
	}
	return frequency;
}

function sortByKey(array, key) {
	return array.sort((a, b) => {
		if (a[key] < b[key]) {
			return -1;
		}
		if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	});
}

function deepClone(object) {
	return JSON.parse(JSON.stringify(object));
}

function intersection(array1, array2) {
	return array1.filter((value) => array2.includes(value));
}

module.exports = {
	uniqueValues,
	letterFrequency,
	sortByKey,
	deepClone,
	intersection
};
