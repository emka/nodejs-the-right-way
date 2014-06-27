const fs = require('fs');
fs.writeFile('target.txt', 'a witty message', function (err) {
	if (err) {
		throw err;
	}
	console.log("File saved!");
});
