// Write a JavaScript function countSubstringOccur(value) that accepts as parameter an array of 2 elements
// arr [keyword, text]. The function finds how many times a substring is contained in a given text (perform 
// case insensitive search). Write JS program substringSearch.js that invokes your function with the sample 
// input data below and prints the output at the console.

function countSubstringOccur(input) {
	var keyword = input[0];
	var text = input[1].toLowerCase();
	var length = text.length;
	var count = 0;
	var index = text.indexOf(keyword);
	
	while(index != -1) {
		count += 1;
		index = text.indexOf(keyword, index + 1);
	}

	return count;
}

console.log (countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']));