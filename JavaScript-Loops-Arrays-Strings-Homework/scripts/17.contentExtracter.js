// Write a JavaScript function extractContent(value) that extracts the text content from given HTML fragment
// (given as string). The function should return anything that is in a tag, without the tags. Write JS program
// contentExtracter.js that invokes your function with the sample input data below and prints the output at the
// console.

function extractContent(input) {
	var pattern = /<[^>]*>/g;
	var result = '';

	result = input.replace(pattern, '');

	return result;
}

console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));