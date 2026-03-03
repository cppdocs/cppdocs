---
title: "Comparison operators"
source_path: "c/language/operator_comparison"
category: "c"
---

Comparison operators are binary operators that test a condition and return 1 if that condition is logically true and 0 if that condition is false.

## Notes
Objects of struct type do not compare equal automatically, and comparing them with [memcmp](/c/string/byte/memcmp/) is not reliable because the padding bytes may have any values.

Because pointer comparison works with pointers to void, the macro [NULL](/c/types/NULL/) may be defined as (void*)0 in C, although that would be invalid in C++ where void pointers do not implicitly convert to typed pointers

Care must be taken when comparing floating-point values for equality, because the results of many operations cannot be represented exactly and must be rounded. In practice, floating-point numbers are usually compared allowing for the difference of one or more units of the last place.

## See also
- [Operator precedence](/c/language/operator_precedence/)
- [assignment](/c/language/operator_assignment/)
- [incrementdecrement](/c/language/operator_incdec/)
- [arithmetic](/c/language/operator_arithmetic/)
- [logical](/c/language/operator_logical/)
- [memberaccess](/c/language/operator_member_access/)
- [other](/c/language/operator_other/)
- [C++ documentation](/cpp/language/operator_comparison/)
