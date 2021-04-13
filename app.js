const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);