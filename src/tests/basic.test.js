import { orderByProps } from '../basic';

const assert = require('assert');

describe('orderByProps', function () {
  it('should correctly order and sort object properties', function () {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];

    const result = orderByProps(obj, order);

    assert.deepStrictEqual(result, [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });

  it('should correctly sort object properties alphabetically', function () {
    const obj = { zebra: 'зебра', apple: 'яблоко', dog: 'собака' };
    const order = ['apple'];

    const result = orderByProps(obj, order);

    assert.deepStrictEqual(result, [
      { key: 'apple', value: 'яблоко' },
      { key: 'dog', value: 'собака' },
      { key: 'zebra', value: 'зебра' }
    ]);
  });

  it('should handle an empty order array', function () {
    const obj = { a: 1, b: 2, c: 3 };
    const order = [];

    const result = orderByProps(obj, order);

    assert.deepStrictEqual(result, [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 }
    ]);
  });

  it('should handle an empty object', function () {
    const obj = {};
    const order = ['name'];

    const result = orderByProps(obj, order);

    assert.deepStrictEqual(result, []);
  });
});

