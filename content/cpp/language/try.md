---
title: "try block"
source_path: "cpp/language/try"
category: "language"
---

An [exception](/cpp/language/exceptions/) thrown in a try block can possibly be handled by an associated handler.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 98 | C++98 | a switch statement can transfer controlinto the compound-statement of a try block | prohibited |
| CWG 1167 | C++98 | it was unspecified whether a function try block on a destructorwill catch exceptions from a base or member destructor | such exceptionsare caught |

## See also
- [Throwing exceptions](/cpp/language/throw/)
- [Handling exceptions](/cpp/language/catch/)
