var socket = io();
socket.on('connect', function () {
  console.log("Connected to server")
});

socket.on('disconnect', function () {
  console.log("Disconnected from server")
});

socket.on('newEmail', function (email) {
  console.log('New email', email)
});

socket.on("newMessage", function (message) {
  console.log('new message', message)
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, function (){
  console.log("Got it!");
});
