/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
/*
  var detectNetwork = function(str) {
    if (str.length == 14 && (str.substring(0, 2) == '38' || str.substring(0, 2) == '39')) {
      return 'Diner\'s Club';
    }
  };
*/
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });

/*
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
*/
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
/*
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
  };
*/
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/

  //var assert = chai.assert;
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    //assert.equal(detectNetwork('4123456789012'), 'Visa');
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    //assert.equal(detectNetwork('4123456789012345'), 'Visa');
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    //assert.equal(detectNetwork('4123456789012345678'), 'Visa');
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.should();
  /*
  var detectNetwork = function(str) {
    if ((str.substring(0, 2) == '51' || str.substring(0, 2) == '52' || str.substring(0, 2) == '53') && str.length == 16) {
      return 'MasterCard';
    }
  }
  */
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.

//  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    //detectNetwork('5412345678901234').should.equal('MasterCard');
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    //detectNetwork('5512345678901234').should.equal('MasterCard');
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011222233334444').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011222233334444123').should.equal('Discover');
  });

  it('has a prefix between 644 and 649 and length of 16', function() {
    for(var prefix = 644; prefix <= 649; prefix++) {
      detectNetwork(prefix + '1222233334444').should.equal('Discover');
    }
  });

  it('has a prefix between 644 and 649 and length of 19', function() {
    for(var prefix = 644; prefix <= 649; prefix++) {
      detectNetwork(prefix + '1222233334444123').should.equal('Discover');
    }
  });

  it('has a prefix of 65 and length of 16', function() {
    detectNetwork('6511222233334444').should.equal('Discover');
  });

  it('has a prefix of 65 and length of 19', function() {
    detectNetwork('6511222233334444123').should.equal('Discover');
  });


});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();


  it('has a prefix of 5018 and a length between 12 and 19', function() {
    var digits = '';
    for(var i = 12; i <= 19; i++) {
      detectNetwork('501822223333' + digits).should.equal('Maestro');
      digits += '4';
    }
  });

  it('has a prefix of 5020 and a length between 12 and 19', function() {
    var digits = '';
    for(var i = 12; i <= 19; i++) {
      detectNetwork('502022223333' + digits).should.equal('Maestro');
      digits += '4';
    }
  });

  it('has a prefix of 5038 and a length between 12 and 19', function() {
    var digits = '';
    for(var i = 12; i <= 19; i++) {
      detectNetwork('503822223333' + digits).should.equal('Maestro');
      digits += '4';
    }
  });

  it('has a prefix of 6304 and a length between 12 and 19', function() {
    var digits = '';
    for(var i = 12; i <= 19; i++) {
      detectNetwork('630422223333' + digits).should.equal('Maestro');
      digits += '4';
    }
  });

  /*
    it('has a prefix of 5020 and a length of ' + i, function() {
      expect(detectNetwork('502022223333' + digits)).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of ' + i, function() {
      expect(detectNetwork('50382222333312')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 18', function() {
      expect(detectNetwork('63042222333312')).to.equal('Maestro');
    });
    */
});

describe("China UnionPay", function() {
  var should = chai.should();

  it("has a prefix between 622126 and 622925 and a length between 16 and 19", function() {
    for(var prefix = 622126; prefix <= 622925; prefix++) {
      var digits = '';
      for(var length = 16; length <= 19; length++) {
        detectNetwork(prefix + '1234567890' + digits).should.equal('China UnionPay');
        digits += '1';
      }
    }
  });

  it("has a prefix between 624 and 626 and a length between 16 and 19", function() {
    for(var prefix = 624; prefix <= 626; prefix++) {
      var digits = '';
      for(var length = 16; length <= 19; length++) {
        detectNetwork(prefix + '1234567890123' + digits).should.equal('China UnionPay');
        digits += '1';
      }
    }
  });

  it("has a prefix between 6282 and 6288 and a length between 16 and 19", function() {
    for(var prefix = 6282; prefix <= 6288; prefix++) {
      var digits = '';
      for(var length = 16; length <= 19; length++) {
        detectNetwork(prefix + '123456789012' + digits).should.equal('China UnionPay');
        digits += '1';
      }
    }
  });
});

describe("Switch", function() {
  var should = chai.should();
  var lengthTest = function(prefix) {
    if(prefix.length == 4) {
      detectNetwork(prefix + "222233334444").should.equal("Switch"); //length of 16
      detectNetwork(prefix + "22223333444412").should.equal("Switch"); //length of 18
      detectNetwork(prefix + "222233334444123").should.equal("Switch"); //length of 19
    } else if(prefix.length == 6) {
      detectNetwork(prefix + "2222333312").should.equal("Switch"); //length of 16
      detectNetwork(prefix + "222233331234").should.equal("Switch"); //length of 18
      detectNetwork(prefix + "2222333312345").should.equal("Switch"); //length of 19
    }
  };

  it("has a prefix of 4903 and a length of 16, 18, or 19", function() {lengthTest("4903")});
  it("has a prefix of 4905 and a length of 16, 18, or 19", function() {lengthTest("4905")});
  it("has a prefix of 4911 and a length of 16, 18, or 19", function() {lengthTest("4911")});
  it("has a prefix of 4936 and a length of 16, 18, or 19", function() {lengthTest("4936")});
  it("has a prefix of 564182 and a length of 16, 18, or 19", function() {lengthTest("564182")});
  it("has a prefix of 633110 and a length of 16, 18, or 19", function() {lengthTest("633110")});
  it("has a prefix of 6759 and a length of 16, 18, or 19", function() {lengthTest("6759")});
  it("has a prefix of 6333 and a length of 16, 18, or 19", function() {lengthTest("6333")});
});
