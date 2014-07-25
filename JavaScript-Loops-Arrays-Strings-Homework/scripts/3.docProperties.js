// Write a JavaScript function displayProperties(value) that displays all the properties of the
// "document" object in alphabetical order. Write a JS program docProperties.js that invokes your 
// function with the sample input data below and prints the output at the console.

function displayProperties() {
	var documentProperties = [];
	
	for (var prop in document) {
		documentProperties.push(prop);
	}

	documentProperties.sort();

	document.write('<h1>Document properties:</h1><br />' +
					'<h2>In alphabetical order</h2><br />' +
					 documentProperties.join('<br />'));
}

displayProperties();