---
title: "Floating constant"
source_path: "c/language/floating_constant"
category: "c"
---

Allows values of floating type to be used directly in expressions.

## Notes
Default [rounding direction](/c/numeric/fenv/FE_round/) and [precision](/c/types/limits/FLT_EVAL_METHOD/) are in effect when the floating constants are converted into internal representations, and [floating-point exceptions](/c/numeric/fenv/FE_exceptions/) are not raised even if [#pragma STDC FENV_ACCESS](/c/preprocessor/impl/) is in effect (for execution-time conversion of character strings, [strtod](/c/string/byte/strtof/) can be used). Note that this differs from [arithmetic constant expressions](/c/language/constant_expression/) of floating type.

Letters in the floating constants are case-insensitive, except that uppercase and lowercase cannot be both used in suffixes for decimal floating-point types(since C23): 0x1.ep+3 and 0X1.EP+3 represent the same floating-point value 15.0.

The decimal point specified by [setlocale](/c/locale/setlocale/) has no effect on the syntax of floating constants: the decimal point character is always the period.

Unlike integers, not every floating value can be represented directly by decimal or even hexadecimal(since C99) constant syntax: macros [NAN](/c/numeric/math/NAN/) and [INFINITY](/c/numeric/math/INFINITY/) as well as functions such as [nan](/c/numeric/math/nan/) offer ways to generate those special values(since C99). Note that 0x1.FFFFFEp128f, which might appear to be an IEEE float NaN, in fact overflows to an infinity in that format.

There are no negative floating constants; an expression such as -1.2 is the [arithmetic operator](/c/language/operator_arithmetic/) unary minus applied to the floating constant 1.2. Note that the special value negative zero may be constructed with -0.0.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    printf("15.0     = %a\n", 15.0);
    printf("0x1.ep+3 = %f\n", 0x1.ep+3);
 
    // Constants outside the range of type double.
    printf("+2.0e+308 --> %g\n",  2.0e+308);
    printf("+1.0e-324 --> %g\n",  1.0e-324);
    printf("-1.0e-324 --> %g\n", -1.0e-324);
    printf("-2.0e+308 --> %g\n", -2.0e+308);
}
```

## See also
- [C++ documentation](/cpp/language/floating_literal/)
