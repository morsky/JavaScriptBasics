// Write a JavaScript function findMostFreqNum(value) that finds the most frequent number in an array.
// If multiple numbers appear the same maximal number of times, print the leftmost of them. Write JS program 
// numberFinder.js that invokes your function with the sample input data below and prints the output at the
// console. 

function findMostFreqNum(input) {
	var length = input.length;
	var counter = 0;
	var maxRepeat = 0;
	var valueRepeat;

	for (var i = 0; i < length; i++) {

		for (var j = 0; j < length; j++) {

			if (input[i] == input[j]) {

				counter += 1;
			}

			if (counter > maxRepeat) {

				maxRepeat = counter;
				valueRepeat = input[i];
			}
		}

		counter = 0;
	}

	return valueRepeat + ' (' + maxRepeat + ' times)';
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));