// Write a JavaScript function findMinAndMax(value) that accepts as parameter an array of numbers.
// The function finds the minimum and the maximum number. Write a JS program minMaxNumbers.js that invokes
// your function with the sample input data below and prints the output at the console.

function findMinAndMax(input)  {
	var minValue = Number.MAX_VALUE;
	var maxValue = Number.MIN_VALUE;
	var length = input.length;

	for (var i = 0; i < length; i++) {
		
		if (input[i] < minValue) {
			minValue = input[i];
		}

		if (input[i] > maxValue) {
			maxValue = input[i];
		}
	}

	return 'Min -> ' + minValue + '\n' +
			'Max -> ' + maxValue + '\n';

}

console.log(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]));
console.log(findMinAndMax([2, 2, 2, 2, 2]));
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]));