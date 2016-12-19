
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
