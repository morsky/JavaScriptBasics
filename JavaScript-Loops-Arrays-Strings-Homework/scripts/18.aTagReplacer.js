// Write a JavaScript function replaceATag(value) that replaces in a HTML document given as string all the 
// tags <a href="…">…</a> with corresponding tags [URL=…]…/URL]. Write JS program aTagReplacer.js that invokes
// your function with the sample input data below and prints the output at the console.

function replaceATag(input) {
	var pattern = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
	var result = '';

	result = input.replace(pattern, '[URL$1]$2[/URL]');

	return result;

}

console.log(replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));