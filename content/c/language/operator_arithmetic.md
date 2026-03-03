---
title: "Arithmetic operators"
source_path: "c/language/operator_arithmetic"
category: "c"
---

Arithmetic operators apply standard mathematical operations to their operands.

## Notes
The unary minus invokes undefined behavior due to signed integer overflow when applied to [INT_MIN](/c/types/limits/), [LONG_MIN](/c/types/limits/), or [LLONG_MIN](/c/types/limits/), on typical (2's complement) platforms.

In C++, unary operator + can also be used with other built-in types such as arrays and functions, not so in C.

Possible output:

## See also
- [Operator precedence](/c/language/operator_precedence/)
- [assignment](/c/language/operator_assignment/)
- [incrementdecrement](/c/language/operator_incdec/)
- [logical](/c/language/operator_logical/)
- [comparison](/c/language/operator_comparison/)
- [memberaccess](/c/language/operator_member_access/)
- [other](/c/language/operator_other/)
- [C++ documentation](/cpp/language/operator_arithmetic/)
