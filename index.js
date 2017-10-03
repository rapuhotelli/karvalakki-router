// @TODO options
export default {
  includes: function(url, options, callback) {
    if (!callback) callback = options;
    if (window.location.pathname.indexOf(url) !== -1) {
      callback();
    }
  },

  is: function(url, options, callback) {
    if (!callback) callback = options;
    if (window.location.pathname === url) {
      callback();
    }
  },

  beginsWith: function(url, options, callback) {
    if (!callback) callback = options;
    if (window.location.pathname.indexOf(url) === 0) {
      callback();
    }
  }
};

