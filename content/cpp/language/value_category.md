---
title: "Value categories"
source_path: "cpp/language/value_category"
category: "language"
---

Each C++ [expression](/cpp/language/expressions/) (an operator with its operands, a literal, a variable name, etc.) is characterized by two independent properties: a [type](/cpp/language/type-id/) and a value category. Each expression has some non-reference type, and each expression belongs to exactly one of the three primary value categories: [prvalue](#prvalue), [xvalue](#xvalue), and [lvalue](#lvalue).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 616 | C++11 | member access and member access throughpointer to member of an rvalue resulted in prvalue | reclassified as xvalue |
| CWG 1059 | C++11 | array prvalues could not be cv-qualified | allowed |
| CWG 1213 | C++11 | subscripting an array rvalue resulted in lvalue | reclassified as xvalue |

## See also
- [C documentation](/c/language/value_category/)
