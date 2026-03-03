---
title: "Scope"
source_path: "cpp/language/scope"
category: "language"
---

Each [declaration](/cpp/language/declarations/) that appears in a C++ program is only visible in some possibly discontiguous scopes.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2793 | C++98 | an extern declaration in a block scope couldconflict with another declaration in the parent scope | prohibited |

## See also
- [C documentation](/c/language/scope/)
