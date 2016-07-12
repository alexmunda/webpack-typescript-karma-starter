import addTwo from './adder';
import {assert} from 'chai';

describe('adder', function() {
  describe('addTwo', function() {
    it('should return 4 when two is passed in', function() {
      assert.equal(4, addTwo(2));
    });
  });
});
