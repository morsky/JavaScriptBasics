// Sorting an array means to arrange its elements in increasing order. Write a JavaScript function 
// sortArray(value) to sort an array. Use the "selection sort" algorithm: find the smallest element, 
// move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Write JS program arraySorter.js that invokes your function with the sample input data below and prints
// the output at the console. Use a second array.

function sortArray(input) {
	var length = input.length;
	var minValue = Number.MAX_VALUE;
	var switchValues;
	var index = 0;

	for (var i = 0; i < length; i++) {
		
		for (var j = i; j < length; j++) {
			
			if (input[j] < minValue ) {
				
				minValue = input[j];
				index = j;
			}
		}

		switchValues = input[i];
		input[i] = minValue;
		input[index] = switchValues;
		
		minValue = Number.MAX_VALUE;
		index = 0;
	}

	return input;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));