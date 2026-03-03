---
title: "Abstract class"
source_path: "cpp/language/abstract_class"
category: "language"
---

Defines an abstract type which cannot be instantiated, but can be used as a base class.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 390 | C++98 | an undefined pure virtual destructor might be called | a definition is required in this case |
| CWG 2153 | C++98 | pure-specifier could appear in friend declarations | prohibited |

## See also
- [virtual](/cpp/language/virtual/)
