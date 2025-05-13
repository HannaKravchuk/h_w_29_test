const { sum, divide } = require('../src/math');

describe('Math Functions', () => {
  describe('sum()', () => {
    it('should return the sum of two numbers', () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(-1, 1)).toBe(0);
    });
  });

  describe('divide()', () => {
    it('should return the division result', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Ділення на нуль неможливе!');
    });
  });
});