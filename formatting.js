function getLastElement(array) {
	return array[array.length - 1];
}

function isPalindrome(word) {
	const reversedWord = word.split("").reverse().join("");
	console.log(reversedWord);
	return word.toLowerCase() === reversedWord.toLowerCase();
}

function capitalizeWords(sentence) {
	const sentenceArray = sentence.split(" ");
	for (let i = 0; i < sentenceArray.length; i++) {
		sentenceArray[i] =
			sentenceArray[i][0].toUpperCase() + sentenceArray[i].substring(1);
	}

	return sentenceArray.join(" ");
}

function lengthOfLongestWord(sentence) {
	const sentenceArray = sentence.split(" ");
	let longestWord = "";
	for (let i = 0; i < sentenceArray.length; i++) {
		if (longestWord.length < sentenceArray[i].length) {
			longestWord = sentenceArray[i];
		}
	}
	return longestWord.length;
}

module.exports = {
	getLastElement,
	isPalindrome,
	capitalizeWords,
	lengthOfLongestWord
};
