module.exports = {

  // Wrappers for test mockability
  location: function() {
    return window.location.pathname
  },
  getPath: function() {
    return this.location().split('?')[0].split("#")[0];
  },

  /**
   * Methods.
   * Functions return true of false for tests to know if condition succeeds.
   */
  
  /*
   * '/hello/world/foo' -> includes('/world', fn) */
  includes: function(url, callback) {
    if (this.getPath().indexOf(url) !== -1) {
      callback();
      return true;
    }
    return false;
  },

  /* 
   * '/hello/world/foo' -> is('/hello/world/foo', fn) */
  is: function (url, callback) {
    if (this.getPath() === url) {
      callback();
      return true;
    }
    return false;
  },
  /*
   * '/hello/world/foo' -> beginsWith('/hello', fn) */
  beginsWith: function(url, callback) {
    if (this.getPath().indexOf(url) === 0) {
      callback();
      return true;
    }
    return false;
  }
};

