---
title: "Increment/decrement operators"
source_path: "c/language/operator_incdec"
category: "c"
---

Increment/decrement operators are unary operators that increment/decrement the value of a variable by 1.

## Notes
Because of the side-effects involved, increment and decrement operators must be used with care to avoid undefined behavior due to violations of [sequencing rules](/c/language/eval_order/).

Increment/decrement operators are not defined for complex or imaginary types: the usual definition of adding/subtracting the real number 1 would have no effect on imaginary types, and making it add/subtract i for imaginaries but 1 for complex numbers would have made it handle 0+yi different from yi.

Unlike C++ (and some implementations of C), the increment/decrement expressions are never themselves lvalues: &++a is invalid.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    int a = 1;
    int b = 1;
 
    printf("original values: a == %d, b == %d\n", a, b);
    printf("result of postfix operators: a++ == %d, b-- == %d\n", a++, b--);
    printf("after postfix operators applied: a == %d, b == %d\n", a, b);
    printf("\n");
 
    // Reset a and b.
    a = 1;
    b = 1;
 
    printf("original values: a == %d, b == %d\n", a, b);
    printf("result of prefix operators: ++a == %d, --b == %d\n", ++a, --b);
    printf("after prefix operators applied: a == %d, b == %d\n", a, b);
}
```

## See also
- [Operator precedence](/c/language/operator_precedence/)
- [assignment](/c/language/operator_assignment/)
- [arithmetic](/c/language/operator_arithmetic/)
- [logical](/c/language/operator_logical/)
- [comparison](/c/language/operator_comparison/)
- [memberaccess](/c/language/operator_member_access/)
- [other](/c/language/operator_other/)
- [C++ documentation](/cpp/language/operator_incdec/)
