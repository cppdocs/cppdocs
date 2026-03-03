---
title: "virtual function specifier"
source_path: "cpp/language/virtual"
category: "language"
---

The virtual specifier specifies that a non-static [member function](/cpp/language/member_functions/) is virtual and supports dynamic dispatch. It may only appear in the decl-specifier-seq of the initial declaration of a non-static member function (i.e., when it is declared in the class definition).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 258 | C++98 | a non-const member function of a derived class might becomevirtual because of a const virtual member function of its base | virtuality also require cv-qualifications to be the same |
| CWG 477 | C++98 | a friend declaration could contain the virtual specifier | not allowed |
| CWG 1516 | C++98 | the definition of the terms "virtual function call"and "virtual call" were not provided | provided |

## See also
- [derived classes and modes of inheritance](/cpp/language/derived_class/)
- [override specifier](/cpp/language/override/)
- [final specifier](/cpp/language/final/)
