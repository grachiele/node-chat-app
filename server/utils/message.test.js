var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = "Adam";
    let text = "This is a test";
    let returned = generateMessage(from, text);
    expect(returned.from).toEqual('Adam');
    expect(returned.text).toEqual('This is a test');
    expect(typeof returned.createdAt).toEqual('number');
  })

  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps/?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toEqual('Deb');
    expect(message.url).toEqual('https://www.google.com/maps/?q=15,19');
    expect(typeof message.createdAt).toEqual('number');

  });
});
