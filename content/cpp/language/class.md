---
title: "Class declaration"
source_path: "cpp/language/class"
category: "language"
---

Classes are user-defined types, defined by class-specifier, which appears in decl-specifier-seq of the [declaration](/cpp/language/declarations/) syntax.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1693 | C++98 | member declarations could not be empty | empty declaration allowed |
| CWG 1930 | C++98 | member-declarator-list could be empty when decl-specifier-seqcontains a storage class specifier or cv qualifier | the list must not be empty |
| CWG 2890 | C++98 | it was unclear where the members of nested classes can be declared | made clear |

## See also
- [C documentation](/c/language/struct/)
