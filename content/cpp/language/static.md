---
title: "static members"
source_path: "cpp/language/static"
category: "language"
---

Inside a class definition, the keyword [static](/cpp/keywords/static/) declares members that are not bound to class instances.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 194 | C++98 | (static) member function names can be the same as the class name | naming restriction added (includingnon-static member functions) |

## See also
- [static storage specifier](/cpp/language/storage_duration/)
