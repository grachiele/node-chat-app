var socket = io();
socket.on('connect', function () {
  console.log("Connected to server")
});

socket.on('disconnect', function () {
  console.log("Disconnected from server")
});

socket.on("newMessage", function (message) {
  console.log('new message', message)
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on("newLocationMessage", function (message) {
  var li = jQuery('<li></li>');
  var a = jQuery(`<a target="_blank">My current location</a>`);
  li.text(`${message.from}: `);
  a.attr('href', message.url)
  li.append(a);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  let user = jQuery('[name = user]')
  let messageTextBox = jQuery('[name = message]');

  if (user.val() === ""){
    alert("You need to enter a username!")
  } else if (messageTextBox.val() === "") {
    alert("You need to enter a message!")
  } else {
    socket.emit('createMessage', {
      from: user.val(),
      text: messageTextBox.val()
    }, function () {
      messageTextBox.val("");
    });
  }
})

var locationButton = jQuery('#send-location');

locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert("SORRY YOUR BROWSER DOESN'T SUPPORT THIS FEATURE!")
  }

  locationButton.attr("disabled", "disabled")

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled')
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function (){
    alert('Unable to fetch location.');
    locationButton.removeAttr('disabled')
  });
});
