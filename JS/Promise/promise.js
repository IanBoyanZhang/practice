var PENDING = 0;
var FUFILLEED = 1;
var REJECTED = 2;

// State machine
function Promise(fn) {
  // Store state which can be PENDING, FULFILLED or REJECTED
  var state = PENDING;
  // Store value or error once FULFILLED or REJECTED
  var value = null;

  // store success & failure handlers attached by calling .then or .done
  var handlers = [];

  // Transitions
  function fulfill(result) {
    state = FULFILLED;
    value = result;
  }

  function reject(error) {
    state = REJECTED;
    value = error;
  }

  function resolve(result) {
    try {
      var then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }

  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler);
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
        handler.onFulfilled(value);
      }
      if (state === REJECTED && typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }

  this.done = function (onFulfilled, onRejected) {
    // ensure we are always asynchronous
    setTimeout(function() {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }, 0);
  };
}
/**
 * Check if a value is a Promise and, if it is,
 * return the 'then' method of that promise
 * @param
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
 * Take a potentially misbehaving resolver function and make sure onFulfilled and onRejected are only called once
 *
 * Makes no gurantees about asynchrony
 * @param {Function} fn A resolver function that may not be trusted
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */
function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return;
      done = true;
      onFulfilled(value);
    }, function (reason) {
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

// Observing (via done)
var p = new Promise(function() {

});
