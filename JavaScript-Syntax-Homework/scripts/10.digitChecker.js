// Write a JavaScript function checkDigit(value) that finds if the third digit (right-to-left) of
// an integer number n (n>1000) is 3. Write JS program digitChecker.js that checks a few numbers.
// The result (true or false) should be printed on the console. Run the program through Node.js.

function checkDigit(number) {
	var devideBy100 = Math.floor(number / 100);
	var thirdDigit = devideBy100 % 10;

	if (thirdDigit == 3) {
		return true;
	} else {
		return false;
	}
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));