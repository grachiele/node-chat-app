const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });


  socket.on('disconnect', () => {
    console.log("Disconnected from client");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
