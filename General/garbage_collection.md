Any garbage collection algorithm must perform 2 basic operations. One, it should be able to detect all the unreachable objects and secondly,
it must reclaim the heap space used by the garbage objects and make the space available again to the program

## Mark and Sweep Algo

	1) Mark Phase
	2) Sweep Phase

### Advantage

It handles the case with cyclic references, even in case of a cycle, this algorithm never ends up in an infinite loop.

There are no additional overheads incurred during the execution of the algorithm.

### Disadvantage

Program suspended?

[Mark and sweep garbage collection algorithm](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/)

Short answer:

Mark and sweep: mark: traverse object graph starting from root objects, sweep: garbage collect unmarked objects. Optimizations: young/old generations, incremental mark and sweep

Reference:

[JS Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
