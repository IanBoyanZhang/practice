/*function log() {
  var args = Array.prototype.slice.call(arguments);
  console.log.apply(console, args);
}*/

function log() {
  var s_args = [].slice.call(arguments);
  console.log.apply(console, s_args);
}

// this is faster
function log() {
  var prefix = 'h ';
  var s = [].slice.call(arguments).join(' ');
  console.log(prefix + s);
}

function range(n) {
}

// Speed tests
// http://stackoverflow.com/questions/9006553/slice-or-array-prototype-slice

log(3, 4);

function it() {
  var self = this;
  for (var i = 0; i < 5; i+=1) {
//    setTimeout(console.log.call(self, i), 10);
    setTimeout(console.log.call(console, i), 10);
//    setTimeout(console.log.bind(console, i), 10);
  }
}
it();

var f = function() {};
var f1 = new f();
var f2 = new f();

/* __------------------------------------ proto__ and prototype ------------------------------------*/
// Great explanation
// https://www.zhihu.com/question/34183746
// See unanser picture
f1.__proto__ === f.prototype;
f1.constructor === f;

f1.__proto__ === f.prototype;
f.__proto__ === Function.prototype;
Function.__proto__ === Function.prototype;
Array.__proto__ === Function.prototype;
Object.__proto__ === Function.prototype;

Function.constructor === Function;
Array.constructor === Function;
Object.constructor === Function;


Function.prototype.__proto__ === Object.prototype;
Array.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;

// With their own methods
Number.prototype;
Array.prototype;
String.prototype;

// Through getPrototypeOf(Object)
// !!!!! Object Function
Object.getPrototypeOf(Object) === Function.prototype;
Object.getPrototypeOf(Function) === Function.prototype;
Object.getPrototypeOf(f) === Function.prototype;
Object.getPrototypeOf(f1) === f1.__proto__;

console.log(f1.__proto__ === f1.constructor.prototype);
// Only construcotr has prototype
console.log("instance prototype", f1.prototype);


// Multiple inheritance using Object.create and mixins
// Method chaining
var obj = function() {
  var self = this;
  this.first = function() {
    console.log('first');
    return self;
  };
  this.second = function() {
    console.log('second');
    return self;
  };
  this.third = function() {
    console.log('third');
    return self;
  };
  return this;
};

var obj = function() {
  this.first = function() {
    console.log('first');
    return this;
  }.bind(this);
  this.second = function() {
    console.log('second');
    return this;
  }.bind(this);
  this.third = function() {
    console.log('third');
    return this;
  }.bind(this);
  return this;
};

obj().first().second().third();

function moveLeft(elem, distance) {
  var left = 0;

  function frame() {
    left++;
    elem.style = left + 'px';

    if (left === distance)
      clearInterval(timeId);
  }

  var timeId = setInterval(frame, 10);  // draw every 10ms
}

var arrProto = Array.prototype;
function toArray(args) {
//  return arrProto.slice.call(args);
  return Array.prototype.slice.call(args);
}

Function.prototype.curry = function() {
  if(arguments.length < 1) {
    return this;            // Nothing to curry, return function
  }
  var self = this;
  var args = toArray(arguments);
  return function() {
    return self.apply(this, args.concat(toArray(arguments)));
  };
};

//var converter = function(factor, symbol, input) {
var converter = function(factor, symbol, input) {
  var rtn = input * factor + symbol;
//  console.log('rtn', rtn);
  return input * factor + symbol;
};

var mileToKm = converter.curry(1.62, 'km');
//mileToKm(3);        // result here
console.log(mileToKm(3));        // result here

var kgToLb = converter.curry(2.2, 'lb');
console.log(kgToLb(3));

// Host vs native object
// http://stackoverflow.com/questions/7614317/what-is-the-difference-between-native-objects-and-host-objects/7614380#7614380


// toString method
// http://stackoverflow.com/questions/18640776/does-every-object-in-js-have-a-tostring-method

// difference string slice substring substr?
// http://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
