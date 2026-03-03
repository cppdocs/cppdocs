---
title: "Order of evaluation"
source_path: "cpp/language/eval_order"
category: "language"
---

Order of evaluation of any part of any expression, including order of evaluation of function arguments is unspecified (with some exceptions listed below). The compiler can evaluate operands and other subexpressions in any order, and may choose another order when the same expression is evaluated again.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1885 | C++11 | sequencing of the destruction of automaticvariables on function return was not explicit | sequencing rules added |
| CWG 1949 | C++11 | “sequenced after” was used but not defined in the C++ standard | defined as the inverseof “sequenced before” |
| CWG 1953 | C++11 | side effects and value computations involving a memorylocation could be unsequenced relative to starting or endingthe lifetime of an object in the same memory location | the behavior isundefined in this case |
| CWG 2146 | C++98 | the cases involving undefined behaviors did not consider bit-fields | considered |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [C documentation](/c/language/eval_order/)
