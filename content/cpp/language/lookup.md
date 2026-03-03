---
title: "Name lookup"
source_path: "cpp/language/lookup"
category: "language"
---

Name lookup is the procedure by which a [name](/cpp/language/name/), when encountered in a program, is associated with the [declaration](/cpp/language/declarations/) that introduced it.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2063 | C++98 | "struct hack" did not apply in class scope (breaks C compatibility) | applied |
| CWG 2218 | C++98 | lookup for non-function (template) names could not associatemultiple declarations, even if they declare the same entity | allowed |

## See also
- [Scope](/cpp/language/scope/)
- [Argument-dependent lookup](/cpp/language/adl/)
- [Template argument deduction](/cpp/language/function_template/#Template_argument_deduction)
- [Overload resolution](/cpp/language/overload_resolution/)
- [C documentation](/c/language/name_space/)
