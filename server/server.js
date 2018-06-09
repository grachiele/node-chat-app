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

  socket.on('disconnect', () => {
    console.log("Disconnected from client");
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail)
  });

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: "Hey, What is going on?",
    createdAt: 1234
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage)
  });

  socket.emit('newMessage', {
    from: "gianpaul817",
    text: "YOOOOOO",
    createdAt: 123456
  });

});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
