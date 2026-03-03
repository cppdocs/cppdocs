---
title: "Arithmetic operators"
source_path: "cpp/language/operator"
category: "language"
---

Returns the result of specific arithmetic operation.

## Declarations
```cpp
A operator+(A)
```

```cpp
T* operator+(T*)
```

```cpp
A operator-(A)
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 614 | C++98 | the algebraic quotient of integer division wasrounded in implementation-defined direction | the algebraic quotient of integerdivision is truncated towards zero(fractional part is discarded) |
| CWG 1450 | C++98 | the result of a / b was unspecified ifit is not representable in the result type | the behavior of both a / b anda % b is undefined in this case |
| CWG 1457 | C++98 | the behavior of shifting the leftmost 1 bit of apositive signed value into the sign bit was undefined | made well-defined |
| CWG 1504 | C++98 | a pointer to a base class subobject of an arrayelement could be used in pointer arithmetic | the behavior isundefined in this case |
| CWG 1515 | C++98 | only unsigned integers which declared unsigned should obey the laws of arithmetic modulo 2n | applies to all unsigned integers |
| CWG 1642 | C++98 | arithmetic operators allow their operands to be lvalues | some operands must be rvalues |
| CWG 1865 | C++98 | the resolution of CWG issue 1504 made the behaviorsof pointer arithmetic involving pointers to array elementundefined if the pointed-to type and the array elementtype have different cv-qualifications in non-top levels | made well-defined |
| CWG 1971 | C++98 | it was unclear whether the rule resolving theambiguity of ~ applies to cases such as ~X(0) | the rule applies to such cases |
| CWG 2419 | C++98 | a pointer to non-array object was only treated as apointer to the first element of an array with size 1in pointer arithmetic if the pointer is obtained by & | applies to all pointersto non-array objects |
| CWG 2626 | C++98 | the result of built-in operator~ was simply'one's complement' without proper definition | the result is phrased in termsof the base-2 representation |
| CWG 2724 | C++20 | the rounding direction of arithmetic right shift was unclear | made clear |
| CWG 2853 | C++98 | a pointer past the end of an object couldnot be added or subtracted with an integer | it can |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_arithmetic/)
