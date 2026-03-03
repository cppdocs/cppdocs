---
title: "requires expression (since C++20)"
source_path: "cpp/language/requires"
category: "language"
since: "C++20"
---

Yields a prvalue expression of type bool that describes the constraints.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2560 | C++20 | it was unclear whether parameter types are adjusted in requires expressions | also adjusted |
| CWG 2911 | C++20 | all expressions appearing within requiresexpressions were unevaluated operands | only someexpressions are |

## See also
- [Constraints and concepts](/cpp/language/constraints/)
