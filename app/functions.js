exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    const names = arr.filter(world => world !== '!');
    return fn(names[0], names[1]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function(arr, fn) {
    var ret = [];
    var makeFn = function(val) {
      return function() { return fn(val); };
    };
    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {

  }
};
