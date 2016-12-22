
## Refresh javascript knowledge
[Inheritance and the prototype chain in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

when doing

```javascript
var o = new Foo();
```

It is actually doing;
```
var o = new Object();
a.[[Prototype]] = Foo.prototype;
Foo.call(o);
```
Other consideration of memory usage such that breaking the prototype chain

Notes: no actual class, only instances

### Constructor

Note that the value of this property is a reference to the function itself, not a string containing the function's name

Read-only for primitive values such as 1, true and "test"

All objects will have a constructor property. Objects created without the explict use of a constructor function (i.e. the object and array literals)
will have a constructor property that points to the fundamental Object constructor type for the object.


#### Changing the constructor of an object

How to modify constructor value of generic objects.



### Event system

#### setTimeout 0
[What does setTimeout with a 0ms delay do?](https://www.quora.com/What-does-setTimeout-with-a-0ms-delay-do)

Runs as soon as the stack unwinds. It's a useful trick for executing asynchronous code in a single thread. The coder's algorithm is non-blocking and asynchronous, 
but it's execution is blocked into an efficient, linear sequence

[Why is setTimeout fn 0 sometimes useful](http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful)

[How javascript timers work](http://ejohn.org/blog/how-javascript-timers-work/)

[Why are some javascript developers using settimeout](http://stackoverflow.com/questions/12051769/why-are-some-javascript-developers-using-settimeout-for-one-millisecond?noredirect=1&lq=1)
Looping back to give control back to Javascript engine


### Extra

#### Reading underscore source code
[Underscore analysis details](https://www.gitbook.com/book/yoyoyohamapi/undersercore-analysis/details)
