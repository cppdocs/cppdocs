---
title: "Member access operators"
source_path: "cpp/language/operator"
category: "language"
---

Accesses a member of its operand.

## Declarations
```cpp
T& operator[](T*, std::ptrdiff_t);
```

```cpp
T& operator[](std::ptrdiff_t, T*);
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_multidimensional_subscript
202110L
(C++23)
Multidimensional subscript operator

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1213 | C++11 | subscripting an array rvalue resulted in lvalue | reclassified as xvalue |
| CWG 1458 | C++98 | applying & to an lvalue of incomplete class type whichdeclares operator& resulted in undefined behavior | it is unspecifiedwhich & is used |
| CWG 1642 | C++98 | the rhs ﻿ in built-in pointer-to-member access operators could be an lvalue | can only be an rvalue |
| CWG 1800 | C++98 | when applying & to a non-static data member of amember anonymous union, it was unclear whetherthe anonymous union take a part in the result type | the anonymous unionis not included inthe result type |
| CWG 2614 | C++98 | the result of E1.E2 was unclear if E2 is a reference member or enumerator | made clear |
| CWG 2725 | C++98 | if E2 is a static member function, E1.E2 is well-formedeven if it is not the left hand opreand of operator() | E1.E2 is ill-formedin this case |
| CWG 2748 | C++98 | the behavior of E1->E2 was unclear if E1 is anull pointer and E2 refers to a static member | the behavior isundefined in this case |
| CWG 2813 | C++98 | E1 was not a discarded-value expression ifE1.E2 names a static member or enumeration | it is |
| CWG 2823 | C++98 | the behavior of *expr was unclear if exprdoes not point to an object or function | made clear |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
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
- [C documentation](/c/language/operator_member_access/)
