---
title: "Compound literals (since C99)"
source_path: "c/language/compound_literal"
category: "c"
---

Constructs an unnamed object of specified type (which may be struct, union, or even array type) in-place.

## Notes
Compound literals of const-qualified character or wide character array types may share storage with [string literals](/c/language/string_literal/).

Each compound literal creates only a single object in its scope:

Because compound literals are unnamed, a compound literal cannot reference itself (a named struct can include a pointer to itself)

Although the syntax of a compound literal is similar to a [cast](/c/language/cast/), the important distinction is that a cast is a non-lvalue expression while a compound literal is an lvalue.

## Example
```cpp
#include <stdio.h>
 
int *p = (int[]){2, 4}; // creates an unnamed static array of type int[2]
                        // initializes the array to the values {2, 4}
                        // creates pointer p to point at the first element of
                        // the array
const float *pc = (const float []){1e0, 1e1, 1e2}; // read-only compound literal
 
struct point {double x,y;};
 
int main(void)
{
    int n = 2, *p = &n;
    p = (int [2]){*p}; // creates an unnamed automatic array of type int[2]
                       // initializes the first element to the value formerly
                       // held in *p
                       // initializes the second element to zero
                       // stores the address of the first element in p
 
    void drawline1(struct point from, struct point to);
    void drawline2(struct point *from, struct point *to);
    drawline1(
        (struct point){.x=1, .y=1},  // creates two structs with block scope and
        (struct point){.x=3, .y=4}); // calls drawline1, passing them by value
    drawline2(
        &(struct point){.x=1, .y=1},  // creates two structs with block scope and
        &(struct point){.x=3, .y=4}); // calls drawline2, passing their addresses
}
 
void drawline1(struct point from, struct point to)
{
    printf("drawline1: `from` @ %p {%.2f, %.2f}, `to` @ %p {%.2f, %.2f}\n",
        (void*)&from, from.x, from.y, (void*)&to, to.x, to.y);
}
 
void drawline2(struct point *from, struct point *to)
{
    printf("drawline2: `from` @ %p {%.2f, %.2f}, `to` @ %p {%.2f, %.2f}\n",
        (void*)from, from->x, from->y, (void*)to, to->x, to->y);
}
```
