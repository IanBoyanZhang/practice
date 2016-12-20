/**
 * Check if a value is a Promise and, if it is , reutnr the 'then' mehotd of that promise
 *
 */
function getThen(value) {
  var t = typeof value;
  if (value && (t === 'object' || t === 'function')) {
    var then = value.then;
    if (typeof then === 'function') {
      return then;
    }
  }
  return null;
}

/**
 * Take a potentially misbehaving resolver function and make sure 
 * onFulfilled and OnRejected are only called once
 *
 * Makes no gurantees about asynchrony
 */

function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function(value) {
      if (done) return;
      done = true;
      onFulfilled(value);
    }, function(value) {
      if (done) return;
      done = true;
      onRejected(reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    onRejected(ex);
  }
}

var Promise = function(fn) {
  // states
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  this.state = PENDING;
  this.value = null;

  var self = this;
  function fulfill(result) {
    self.state = FULFILLED;
    self.value = result;
  }

  function reject(reason) {
    self.state = REJECTED;
    self.value = reason;
  }

  function handle(handler) {
    if (state === PENDING) {
      return handlers.push(handler);
    }
    var t = typeof handler;
    if (state === FULFILLED && t === 'function') {
      handler.onFulFilled(value);
    }
    if (state === REJECTED && t === 'function') {
      hanlder.onRejected(value);
    }
  }

  doResolve(fn, fulfill, reject);
};


// test
//
var P = new Promise(function(resolve, reject) {
  resolve(5);
});
console.log(P.state);
console.log(P.value);


Promise.prototype.done = function(onFulfilled, onRejected) {
  // ensure we are always asynchronous
  setTimeout(function () {
    setTimeout(function() {
      handler({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    });
  }, 0);
};
