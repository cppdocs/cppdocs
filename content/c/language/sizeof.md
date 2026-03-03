---
title: "sizeof operator"
source_path: "c/language/sizeof"
category: "c"
---

Queries size of the object or type.

## Notes
Depending on the computer architecture, a [byte](https://en.wikipedia.org/wiki/byte) may consist of 8 or more bits, the exact number provided as [CHAR_BIT](/c/types/limits/).

sizeof(char), sizeof(signed char), and sizeof(unsigned char) always return 1.

sizeof cannot be used with function types, incomplete types (including void), or [bit-field](/c/language/bit_field/) lvalues.

When applied to an operand that has [structure](/c/language/struct/) or [union](/c/language/union/) type, the result is the total number of bytes in such an object, including internal and trailing padding. The trailing padding is such that if the object were an element of an array, the alignment requirement of the next element of this array would be satisfied, in other words, sizeof(T) returns the size of an element of a T[] array.

If type is a [VLA](/c/language/array/) type and changing the value of its
size expression would not affect the result of sizeof, it is unspecified whether or not
the size expression is evaluated.

Except if the type of expression is a [VLA](/c/language/array/),(since C99)expression is not evaluated and the sizeof operator may be used in an integer [constant expression](/c/language/constant_expression/).

If the type of expression is a [variable-length array](/c/language/array/) type, expression is evaluated and the size of the array it evaluates to is calculated at run time.

Number of elements in any [array](/c/language/array/) a including VLA(since C99) may be determined with the expression sizeof a / sizeof a[0]. Note that if a has pointer type (such as after array-to-pointer conversion of function parameter type adjustment), this expression would simply divide the number of bytes in a pointer type by the number of bytes in the pointed type.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    short x;
    // type argument:
    printf("sizeof(float)          = %zu\n", sizeof(float));
    printf("sizeof(void(*)(void))  = %zu\n", sizeof(void(*)(void)));
    printf("sizeof(char[10])       = %zu\n", sizeof(char[10]));
//  printf("sizeof(void(void))     = %zu\n", sizeof(void(void))); // Error: function type
//  printf("sizeof(char[])         = %zu\n", sizeof(char[])); // Error: incomplete type
 
    // expression argument:
    printf("sizeof 'a'             = %zu\n", sizeof 'a'); // type of 'a' is int
//  printf("sizeof main            = %zu\n", sizeof main); // Error: Function type
    printf("sizeof &main           = %zu\n", sizeof &main);
    printf("sizeof \"hello\"         = %zu\n", sizeof "hello"); // type is char[6]
    printf("sizeof x               = %zu\n", sizeof x); // type of x is short
    printf("sizeof (x+1)           = %zu\n", sizeof(x + 1)); // type of x+1 is int
}
```

## See also
- [C++ documentation](/cpp/language/sizeof/)
