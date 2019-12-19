exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split('')
                 .filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                 }).join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
