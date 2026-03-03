---
title: "if statement"
source_path: "cpp/language/if"
category: "language"
---

Conditionally executes another statement.

## Notes
If statement-true or statement-false is not a compound statement, it is treated as if it were:

is the same as

The scope of the name introduced by condition, if it is a declaration, is the combined scope of both statements' bodies:

If statement-true is entered by [goto](/cpp/language/goto/) or longjmp, condition is not evaluated and statement-false is not executed.

Built-in conversions are not allowed in the condition of a constexpr if statement, except for non-[narrowing](/cpp/language/list_initialization/#Narrowing_conversions) [integral conversions](/cpp/language/implicit_cast/#Integral_conversions) to bool.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 631 | C++98 | the control flow was unspecified if thefirst substatement is reached via a label | the condition is not evaluated and the secondsubstatement is not executed (same as in C) |

## See also
- [is_constant_evaluated](/cpp/types/is_constant_evaluated/)
- [C documentation](/c/language/if/)
