References:

1. [Day Stout Warren Algo](https://en.wikipedia.org/wiki/Day%E2%80%93Stout%E2%80%93Warren_algorithm)

2. [MIT 6.006 fall09 Lecture 4 Balanced Binary Searhc Tree](https://courses.csail.mit.edu/6.006/fall09/lecture_notes/lecture04.pdf)

## AVL

1. insert as in simple BST
2. work your way up tree, restoring AVL property (and updating heights as you go)

Each Step
suppose x is lowest node violating AVL
assume x is right heavy (left case symmetric)
