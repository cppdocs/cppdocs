---
title: "Identifiers"
source_path: "cpp/language/name"
category: "language"
---

An identifier is an arbitrarily long sequence of digits, underscores, lowercase and uppercase Latin letters, and most Unicode characters.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1440 | C++11 | decltype expressions preceding :: could denote any type | can only denote classor enumeration types |
| CWG 1963 | C++11 | implementation-defined characters other than digits, non-digitsand universal character names could be used in an identifier | prohibited |
| CWG 2521 | C++11 | the identifier in user-defined-string-literal ofa literal operator was reserved as usual | the rules are different |
| CWG 2771 | C++98 | &a was not transformed into &this->a in class contexts | it is transformed |
| CWG 2777 | C++20 | the type of an identifier expression was unclearif it names a template parameter object | made clear |
| CWG 2818 | C++98 | predefined macro names are reserved | they are not reserved |

## See also
- [C documentation](/c/language/identifier/)
