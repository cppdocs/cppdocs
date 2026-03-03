---
title: "Function declarations"
source_path: "c/language/function_declaration"
category: "c"
---

A function declaration introduces an [identifier](/c/language/identifier/) that designates a function and, optionally, specifies the types of the function parameters (the prototype). Function declarations (unlike [definitions](/c/language/function_definition/)) may appear at block scope as well as file scope.

## Notes
Unlike in C++, the declarators f() and f(void) have different meaning: the declarator f(void) is a new-style (prototype) declarator that declares a function that takes no parameters. The declarator f() is a declarator that declares a function that takes unspecified number of parameters (unless used in a function definition)

Unlike in a [function definition](/c/language/function_definition/), the parameter list may be inherited from a typedef

In C89, specifiers-and-qualifiers was optional, and if omitted, the return type of the function defaulted to int (possibly amended by the declarator).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 423 | C89 | the return type might be qualified | the return type is implicitly disqualified |

## See also
- [C++ documentation](/cpp/language/function/)
