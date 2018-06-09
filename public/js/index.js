var socket = io();
socket.on('connect', function () {
  console.log("Connected to server")

  socket.emit("createMessage", {
    to: "jerry@email.com",
    text: "helloooooo"
  })
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
