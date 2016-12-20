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
    }, function(reason) {
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
  value = null;

  var self = this;
  function fulfill(result) {
    self.state = FULFILLED;
//    self.value = result;
    value = result;
  }

  function reject(reason) {
    self.state = REJECTED;
//    self.value = reason;
    value = result;
  }
  
  this.handlers = [];

  
  this.handle = function(handler) {
    if (self.state === PENDING) {
//      console.log("Chage state to ", self.state);
      self.handlers.push(handler);
      return;
    }
  
    if (self.state === FULFILLED && typeof handler.onFulfilled === 'function') {
//      console.log("Chage state to ", self.state);
//      handler.onFulfilled(this.value);
      handler.onFulfilled(value);
    }
    if (self.state === REJECTED && typeof handler.onRejected === 'function') {
//      console.log("Chage state to ", self.state);
//      handler.onRejected(this.value);
      handler.onRejected(value);
    }
  };

  this.done = function(onFulfilled, onRejected) {
  var self = this;
  // ensure we are always asynchronou
    setTimeout(function() {
      self.handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }, 0);
};


  doResolve(fn, fulfill, reject);
  // for chaining
  return this;
};

// test
//
var P = new Promise(function(resolve, reject) {
  resolve(5);
});
// console.log(P.state);
// console.log(P.value);

// test
P.done(function(value) {
  console.log("onFulfilled: ", value);
}, function(reason) {
  console.log("onRejected: ", reason);
});
