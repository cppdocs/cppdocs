---
title: "User-defined conversion function"
source_path: "cpp/language/cast_operator"
category: "language"
---

Enables [implicit conversion](/cpp/language/implicit_cast/) or [explicit conversion](/cpp/language/explicit_cast/) from a [class type](/cpp/language/class/) to another type.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 296 | C++98 | conversion functions could be static | they cannot be declared static |
| CWG 2016 | C++98 | conversion functions could not specify return types,but the types are present in conversion-type-id | return types cannot be specified in thedeclaration specifiers of conversion functions |
| CWG 2175 | C++11 | it was unclear whether the [[noreturn]] inoperator int [[noreturn]] (); is parsed as a part ofnoptr-declarator (of function declarator) or conversion-type-id | it is parsed as a part ofconversion-type-id |
