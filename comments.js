// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

//importing http module
const http = require('http');
const fs = require('fs');
const path = require('path');

//creating server
const server = http.createServer((req, res) => {
    //reading
    fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });

}); //end of server
