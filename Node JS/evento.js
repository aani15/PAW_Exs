var http = require('http')
var fs = require('fs')

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('/index.html', (err, file) => {
        reponse.end(file);
    })
})

server.listen(8000)