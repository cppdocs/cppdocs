---
title: "restrict type qualifier (since C99)"
source_path: "c/language/restrict"
category: "c"
---

Each individual type in the C [type system](/c/language/compatible_type/) has several qualified versions of that type, corresponding to one, two, or all three of the [const](/c/language/const/), [volatile](/c/language/volatile/), and, for pointers to object types, restrict qualifiers. This page describes the effects of the restrict qualifier.

## Notes
The intended use of the restrict qualifier (like the register storage class) is to promote optimization, and deleting all instances of the qualifier from all preprocessing translation units composing a conforming program does not change its meaning (i.e., observable behavior).

The compiler is free to ignore any or all aliasing implications of uses of restrict.

To avoid undefined behavior, the programmer must ensure that the aliasing assertions made by the restrict-qualified pointers are not violated.

Many compilers provide, as a language extension, the opposite of restrict: an attribute indicating that pointers may alias even if their types differ: [may_alias](https://gcc.gnu.org/onlinedocs/gcc/Common-Type-Attributes.html#index-g_t_0040code_007bmay_005falias_007d-type-attribute-3667) (gcc),

## Example
```cpp
int foo(int *a, int *b)
{
    *a = 5;
    *b = 6;
    return *a + *b;
}
 
int rfoo(int *restrict a, int *restrict b)
{
    *a = 5;
    *b = 6;
    return *a + *b;
}
```
