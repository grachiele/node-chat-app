var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = "Adam";
    let text = "This is a test";
    let returned = generateMessage(from, text);
    expect(returned.from).toEqual('Adam');
    expect(returned.text).toEqual('This is a test');
    expect(typeof returned.createdAt).toEqual('number');
  })
});
