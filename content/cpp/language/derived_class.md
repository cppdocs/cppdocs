---
title: "Derived classes"
source_path: "cpp/language/derived_class"
category: "language"
---

Any class type (whether declared with class-key class or struct) may be declared as derived from one or more base classes which, in turn, may be derived from their own base classes, forming an inheritance hierarchy.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1710 | C++98 | the syntax of class-or-decltype made it impossible to derive froma dependent class where the template disambiguator is required | allowed template |

## See also
- [virtual functions](/cpp/language/virtual/)
- [abstract classes](/cpp/language/abstract_class/)
