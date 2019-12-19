exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((res, rej) => {
      res(value);
    });
  },

  manipulateRemoteData: function(url) {
    var defered = $.Deferred();
    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      defered.resolve(people.sort());
    });
    return defered.promise();
  }
};
