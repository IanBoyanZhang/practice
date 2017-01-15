// The tower of Hanoi is a classic mathematical puzzle, you have 3 towers and N disks of different sizes 
// Which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to
// bottom.

// You have following constrains 
// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.

// Design a algorithm to move the disks from the first tower to the last using stacks

// hint: start with the smallest possible example: n = 1, then n = 2 ...

// Use three stacks to represent towers
var tower1 = tower2 = tower3 = [];

// How to design the algorithms?

