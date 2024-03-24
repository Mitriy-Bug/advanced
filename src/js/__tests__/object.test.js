import orderByProps from '../object';
test('orderByProps', () => { const obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  expect(orderByProps(obj, ['c', 'b', 'a'])).toEqual([{"key": "a", "value": 1}, {"key": "b", "value": 2}, {"key": "c", "value": 3}]);
})