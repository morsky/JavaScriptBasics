// Write a JavaScript function printNumbers(n) that accepts as parameter integer n. The function finds all
// integer numbers from 1 to n that are not divisible by 4 or by 5. Write a JS program numberChecker.js that
// invokes your function with the sample input data below and prints the output at the console.

function printNumbers(number) {
	var listOfNumbers = '';

	for (var i = 1; i < number; i++) {
		if (i % 4 == 0 || i % 5 == 0) {
			continue;
		} else {
			listOfNumbers += (i + ', ');			
		}
	}

	if (listOfNumbers[listOfNumbers.length - 1] == ' ') {
		listOfNumbers = listOfNumbers.substring(0, listOfNumbers.length - 2);
	}

	if (listOfNumbers.length == 0) {
		listOfNumbers = 'no';
	}

	return listOfNumbers;
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));