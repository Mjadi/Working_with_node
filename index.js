const fs = require('fs');
const http = require('http')


let a = (name) => {
    return "Hello " + name;
}

let port = process.env.PORT || 8080;

let server = http.createServer(function (req, res) {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.statusCode = 200;
        let data = fs.readFileSync('index.html')
        res.end(data.toString())
        // res.end('<p>Hello i am under the water</p>');
    }

    else if (req.url == '/about') {
        res.statusCode = 200;
        res.write('<h3>About me.</h3>')
        res.end("<p>Hi i ma legend!</p>")
    }

    else {
        res.statusCode = 404;
        res.end("Not found!");
    }

});

server.listen(port, () => {
    console.log(port);
})

// console.log(a("Moto"));

module.exports = a;

