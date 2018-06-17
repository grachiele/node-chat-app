var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let returned = generateMessage("Adam", "This is a test");
    expect(returned.from).toEqual('Adam');
    expect(returned.text).toEqual('This is a test');
    expect(typeof returned.createdAt).toEqual('number');
  })
});
