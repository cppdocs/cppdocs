---
title: "Type"
source_path: "cpp/language/type-id"
category: "language"
---

[Objects](/cpp/language/objects/), [references](/cpp/language/reference/), [functions](/cpp/language/functions/) including [function template specializations](/cpp/language/template_specialization/), and [expressions](/cpp/language/expressions/) have a property called type, which both restricts the operations that are permitted for those entities and provides semantic meaning to the otherwise generic sequences of bits.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 328 | C++98 | class members of incomplete type were not prohibitedif an object of the class type was never created | non-static class data membersneed to be complete |
| CWG 977 | C++98 | the point when an enumeration type becomescomplete in its definition was unclear | the type is complete once theunderlying type is determined |
| CWG 1362 | C++98 | user-defined conversions to type T* or T& required T to be complete | not required |
| CWG 2006 | C++98 | cv-qualified void types were object type and complete type | excluded from both categories |
| CWG 2448 | C++98 | only cv-unqualified types could be integral and floating-point types | allows cv-qualified types |
| CWG 2630 | C++98 | it was unclear whether a class is considered complete outsidethe translation unit where the definition of the class appears | the class is completeif its definition isreachable in this case |
| CWG 2643 | C++98 | the type of a pointer to array of unknown boundcould not be completed (but it is already complete) | the pointed-to array typecannot be completed |
| LWG 2139 | C++98 | the meaning of “user-defined type” was unclear | defines and uses “program-defined type” instead |
| LWG 3119 | C++11 | it was unclear whether closure types are program-defined types | made clear |

## See also
- [Type traits](/cpp/meta/#Type_traits)
- [C documentation](/c/language/compatible_type/)
