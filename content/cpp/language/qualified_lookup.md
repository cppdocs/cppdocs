---
title: "Qualified name lookup"
source_path: "cpp/language/qualified_lookup"
category: "language"
---

A qualified name is a name that appears on the right hand side of the scope resolution operator :: (see also [qualified identifiers](/cpp/language/name/#Qualified_identifiers)).
A qualified name may refer to a

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 215 | C++98 | the name preceding :: must be a class name or namespacename, so template parameters were not allowed there | the name must designate a class,namespace or dependent type |
| CWG 318 | C++98 | if the right hand side of :: names the same classas the left hand side, the qualified name was alwaysconsidered to name the constructor of that class | only name the constructorwhen acceptable (e.g. not inan elaborated type specifier) |

## See also
- [Unqualified name lookup](/cpp/language/unqualified_lookup/)
- [Scope](/cpp/language/scope/)
- [Argument-dependent lookup](/cpp/language/adl/)
- [Template argument deduction](/cpp/language/function_template/)
- [Overload resolution](/cpp/language/overload_resolution/)
