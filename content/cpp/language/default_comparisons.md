---
title: "Default comparisons (since C++20)"
source_path: "cpp/language/default_comparisons"
category: "language"
since: "C++20"
---

Comparison operator functions can be explicitly defaulted to request the compiler to generate the corresponding default comparison for a class.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2539 | C++20 | the synthesized three-way comparison would choosestatic_cast even if the explicit conversion is not available | does not choosestatic_cast in this case |
| CWG 2546 | C++20 | the defaulted secondary operator@ was notdefined as deleted if the overload resolution ofx @ y selects a non-usable rewritten candidate | defined as deletedin this case |
| CWG 2547 | C++20 | it was unclear whether comparison operatorfunctions for non-classes can be defaulted | they cannot be defaulted |
| CWG 2568 | C++20 | the implicit definition of comparison operatorfunctions might violate member access rules | access checks are performedfrom a context equivalentto their function bodies |

## See also
- [overload resolution](/cpp/language/overload_resolution/#Call_to_an_overloaded_operator)
- [three-way comparison operator](/cpp/language/operator_comparison/#Three-way_comparison)
- [Operator overloading](/cpp/language/operators/#Comparison_operators)
