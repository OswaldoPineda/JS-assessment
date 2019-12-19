exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let index = 0; index < arr.length; index++) {
      if(arr[index] === item) { return index; }
    }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArr = [];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] !== item ) { newArr.push(arr[index]) }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;
    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    var ret = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(arr[i] * arr[i]);
    }
    return ret;
  },

  findAllOccurrences: function(arr, target) {
    var ret = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }
    return ret;
  }
};
