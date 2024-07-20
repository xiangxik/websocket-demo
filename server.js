const http = require('http');
const ws = require("ws");

const server = http.createServer();
const wss = new ws.Server({server});

wss.on('connection', (socket) => {
    console.log('server websocket connected');
    console.log(JSON.stringify(socket))

    socket.on('message', (message) => {
        console.log('received: ' + message);
        
        socket.send('Hello~')
    });

    socket.on('close', () => {
        console.log('close');
    });
});

server.on('request', (req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hello W');
})

server.listen(8080, () => {
    console.log('server started at 8080')
});