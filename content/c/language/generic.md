---
title: "Generic selection (since C11)"
source_path: "c/language/generic"
category: "c"
---

Provides a way to choose one of several expressions at compile time, based on a type of a controlling expression

## Notes
The controlling-expression and the expressions of the selections that are not chosen are never evaluated.

Because of the lvalue conversions, "abc" matches char* and not char[4] and (int const){0} matches int, and not const int.

All [value categories](/c/language/value_category/), including function designators and void expressions, are allowed as expressions in a generic selection, and if selected, the generic selection itself has the same value category.

The [type-generic math macros](/c/numeric/tgmath/) from [<tgmath.h>](/c/numeric/tgmath/), introduced in C99, were implemented in compiler-specific manner. Generic selections, introduced in C11, gave the programmers the ability to write similar type-dependent code.

Generic selection is similar to overloading in C++ (where one of several functions is chosen at compile time based on the types of the arguments), except that it makes the selection between arbitrary expressions.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
// Possible implementation of the tgmath.h macro cbrt
#define cbrt(X) _Generic((X),     \
              long double: cbrtl, \
                  default: cbrt,  \
                    float: cbrtf  \
              )(X)
 
int main(void)
{
    double x = 8.0;
    const float y = 3.375;
    printf("cbrt(8.0) = %f\n", cbrt(x));    // selects the default cbrt
    printf("cbrtf(3.375) = %f\n", cbrt(y)); // converts const float to float,
                                            // then selects cbrtf
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 481 | C11 | it was underspecified if the controlling expression undergoes lvalue conversions | it undergoes |

## See also
- [C++ documentation](/cpp/language/templates/)
