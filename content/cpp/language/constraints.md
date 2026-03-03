---
title: "Constraints and concepts (since C++20)"
source_path: "cpp/language/constraints"
category: "language"
since: "C++20"
---

[Class templates](/cpp/language/class_template/), [function templates](/cpp/language/function_template/) (include [generic lambdas](/cpp/language/lambda/)), and other [templated functions](/cpp/language/templates/#Templated_entity) (typically members of class templates) might be associated with a constraint, which specifies the requirements on template arguments, which can be used to select the most appropriate function overloads and template specializations.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_concepts
201907L
(C++20)
Constraints
202002L
(C++20)
Conditionally trivial special member functions

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2428 | C++20 | could not apply attributes to concepts | allowed |

## See also
- [Concepts TS](/cpp/experimental/constraints/)
- [Named requirements](/cpp/named_req/)
- [Requires expression](/cpp/language/requires/)
