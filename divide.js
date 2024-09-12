function divide(a, b) {
	if (isNaN(b) || b === 0) {
		return "b is not a number or 0";
	} else {
		return a / b;
	}
}

module.exports = { divide };
