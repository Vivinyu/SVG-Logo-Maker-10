const { Circle, Triangle, Square } = require('./lib/shapes');

describe('Shapes', () => {
  test('Circle render', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });

  test('Square render', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
  });
});