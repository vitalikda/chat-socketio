const express = require('express');
const app = express();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/public/"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    // console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, function () {
  console.log('listening on *:3000');
});