---
title: "Array declaration"
source_path: "cpp/language/array"
category: "language"
---

Declares an object of array type.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 393 | C++98 | a pointer or reference to an array of unknownbound could not be a function parameter | allowed |
| CWG 619 | C++98 | when omitted, the bound of an array couldnot be inferred from a previous declaration | inference allowed |
| CWG 2099 | C++98 | the bound of an array static data member couldnot be omitted even if an initializer is provided | omission allowed |
| CWG 2397 | C++11 | auto could not be used as element type | allowed |

## See also
- [C documentation](/c/language/array/)
