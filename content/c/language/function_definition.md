---
title: "Function definitions"
source_path: "c/language/function_definition"
category: "c"
---

A function definition associates the function body (a sequence of declarations and statements) with the function name and parameter list. Unlike [function declaration](/c/language/function_declaration/), function definitions are allowed at file scope only (there are no nested functions).

## Notes
The argument list must be explicitly present in the declarator, it cannot be inherited from a typedef

In C89, specifiers-and-qualifiers was optional, and if omitted, the return type of the function defaulted to int (possibly amended by the declarator).

In addition, old-style definition didn't require a declaration for every parameter in declaration-list. Any parameter whose declaration was missing had type int

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 423 | C89 | the return type might be qualified | the return type is implicitly disqualified |

## See also
- [C++ documentation](/cpp/language/function/#Function_definition)
