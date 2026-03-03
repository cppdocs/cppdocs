---
title: "Unqualified name lookup"
source_path: "cpp/language/unqualified_lookup"
category: "language"
---

For an unqualified name, that is a name that does not appear to the right of a scope resolution operator ::, name lookup examines the [scopes](/cpp/language/scope/) as described below, until it finds at least one declaration of any kind, at which time the lookup stops and no further scopes are examined. (Note: lookup from some contexts skips some declarations, for example, lookup of the name used to the left of :: ignores function, variable, and enumerator declarations, lookup of a name used as a base class specifier ignores all non-type declarations).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 490 | C++98 | any name in a template argument in a friendmember function declaration was not lookedup in the scope of the member function's class | only excludes the namesin template arguments inthe declarator identifier |
| CWG 514 | C++98 | any unqualified name used in namespacescope was first looked up in that scope | the unqualified names used to define anamespace variable member outside thatnamespace are first looked up in that namespace |

## See also
- [Qualified name lookup](/cpp/language/qualified_lookup/)
- [Scope](/cpp/language/scope/)
- [Argument-dependent lookup](/cpp/language/adl/)
- [Template argument deduction](/cpp/language/function_template/)
- [Overload resolution](/cpp/language/overload_resolution/)
