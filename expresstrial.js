const express = require('express');
const fs = require('fs')
const app = express();
const port = 8080;

app.get('/', function (req, res) {
	console.log(req.url)
	res.statusCode = 200;
	let body = fs.readFileSync('index.html');
	res.send(body.toString());
})

app.get('/about', (req, res) => {
	console.log(req.url)
	res.statusCode = 200;
	res.send('<h2>About page:-</h2> <p>I am a devil of my word.</p>');

})

app.listen(port, () => {
	console.log(`Server hosted at ${port}`)


})