---
title: "Array initialization"
source_path: "c/language/array_initialization"
category: "c"
---

When [initializing](/c/language/initialization/) an object of [array](/c/language/array/) type, the initializer must be either a [string literal](/c/language/string_literal/) (optionally enclosed in braces) or be a brace-enclosed list of initialized for array members:

## Notes
The [order of evaluation](/c/language/eval_order/) of subexpressions in an array initializer is indeterminately sequenced in C (but not in C++ since C++11):

In C, the braced list of an initializer cannot be empty. C++ allows empty list:

An empty initializer can be used to initialize an array:

As with all other [initialization](/c/language/initialization/), every expression in the initializer list must be a [constant expression](/c/language/constant_expression/) when initializing arrays of static or thread-local [storage duration](/c/language/storage_duration/):

## Example
```cpp
int main(void)
{
    // The following four array declarations are the same
    short q1[4][3][2] = {
        { 1 },
        { 2, 3 },
        { 4, 5, 6 }
    };
 
    short q2[4][3][2] = {1, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 4, 5, 6};
 
    short q3[4][3][2] = {
        {
            { 1 },
        },
        {
            { 2, 3 },
        },
        {
            { 4, 5 },
            { 6 },
        }
    };
 
    short q4[4][3][2] = {1, [1]=2, 3, [2]=4, 5, 6};
 
 
    // Character names can be associated with enumeration constants
    // using arrays with designators:
    enum { RED, GREEN, BLUE };
    const char *nm[] = {
        [RED] = "red",
        [GREEN] = "green",
        [BLUE] = "blue",
    };
}
```
