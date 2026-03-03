---
title: "Initialization"
source_path: "c/language/initialization"
category: "c"
---

A [declaration](/c/language/declarations/) of an object may provide its initial value through the process known as initialization.

## Notes
When initializing an object of static or thread-local [storage duration](/c/language/storage_duration/), every expression in the initializer must be a [constant expression](/c/language/constant_expression/) or [string literal](/c/language/string_literal/).

Initializers cannot be used in declarations of objects of incomplete type, VLAs, and block-scope objects with linkage.

The initial values of function parameters are established as if by assignment from the arguments of a [function call](/c/language/operator_other/#Function_call), rather than by initialization.

If an indeterminate value is used as an argument to any standard library call, the behavior is undefined. Otherwise, the result of any expression involving indeterminate values is an indeterminate value (e.g. int n;, n may not compare equal to itself and it may appear to change its value on subsequent reads)

There is no special construct in C corresponding to [value initialization](/cpp/language/value_initialization/) in C++; however, = {0}(or (T){0} in compound literals)(since C99) can be used instead, as the C standard does not allow empty structs, empty unions, or arrays of zero length.

The empty initializer = {} (or (T){} in compound literals) can be used to achieve the same semantics as [value initialization](/cpp/language/value_initialization/) in C++.

## Example
```cpp
#include <stdlib.h>
int a[2]; // initializes a to {0, 0}
int main(void)
{
    int i;          // initializes i to an indeterminate value
    static int j;   // initializes j to 0
    int k = 1;      // initializes k to 1
 
    // initializes int x[3] to 1,3,5
    // initializes int* p to &x[0]
    int x[] = { 1, 3, 5 }, *p = x;
 
    // initializes w (an array of two structs) to
    // { { {1,0,0}, 0}, { {2,0,0}, 0} }
    struct {int a[3], b;} w[] = {[0].a = {1}, [1].a[0] = 2};
 
    // function call expression can be used for a local variable
    char* ptr = malloc(10);
    free(ptr);
 
//  Error: objects with static storage duration require constant initializers
//  static char* ptr = malloc(10);
 
//  Error: VLA cannot be initialized
//  int vla[n] = {0};
}
```

## See also
- [C++ documentation](/cpp/language/initialization/)
