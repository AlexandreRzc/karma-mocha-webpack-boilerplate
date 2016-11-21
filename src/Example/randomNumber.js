(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.randomNumber = factory();
  }
}(this, function () {

  var randomNumber = {
    getRandomNumber: function () {
      return 42; // chosen by fair dice roll
                // guaranteed to be random
    }
  };

  return randomNumber;

}));
