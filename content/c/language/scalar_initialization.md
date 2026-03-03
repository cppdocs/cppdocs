---
title: "Scalar initialization"
source_path: "c/language/scalar_initialization"
category: "c"
---

When [initializing](/c/language/initialization/) an object of [scalar type](/c/language/compatible_type/#Type_groups), the initializer must be a single expression

## Notes
Because of the rules that apply to conversions as if by assignment, [const](/c/language/const/) and [volatile](/c/language/volatile/) qualifiers on the declared type are ignored when determining which type to convert the expression to.

See [initialization](/c/language/initialization/) for the rules that apply when no initializer is used.

As with all other initializations, expression must be a [constant expression](/c/language/constant_expression/) when initializing objects of static or thread-local [storage duration](/c/language/storage_duration/).

The expression cannot be a [comma operator](/c/language/operator_other/#Comma_operator) (unless parenthesized) because the comma at the top level would be interpreted as the beginning of the next declarator.

When initializing objects of floating-point type, all computations for the objects with automatic [storage duration](/c/language/storage_duration/) are done as-if at execution time and are affected by the [current rounding](/c/numeric/fenv/FE_round/); floating-point errors are reported as specified in [math_errhandling](/c/numeric/math/math_errhandling/). For objects of static and thread-local storage duration, computations are done as-if at compile time, and no exceptions are raised:

## Example
```cpp
#include <stdbool.h>
int main(void)
{
    bool b = true;
    const double d = 3.14;
    int k = 3.15; // conversion from double to int
    int n = {12}, // optional braces
       *p = &n,   // non-constant expression OK for automatic variable
       (*fp)(void) = main;
    enum {RED, BLUE} e = RED; // enumerations are scalar types as well
}
```
