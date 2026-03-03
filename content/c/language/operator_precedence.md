---
title: "C Operator Precedence"
source_path: "c/language/operator_precedence"
category: "c"
---

The following table lists the precedence and associativity of C operators. Operators are listed top to bottom, in descending precedence.

## Notes
Precedence and associativity are independent from [order of evaluation](/c/language/eval_order/).

The standard itself doesn't specify precedence levels. They are derived from the grammar.

In C++, the conditional operator has the same precedence as assignment operators, and prefix ++ and -- and assignment operators don't have the restrictions about their operands.

Associativity specification is redundant for unary operators and is only shown for completeness: unary prefix operators always associate right-to-left (sizeof ++*p is sizeof(++(*p))) and unary postfix operators always associate left-to-right (a[1][2]++ is ((a[1])[2])++). Note that the associativity is meaningful for member access operators, even though they are grouped with unary postfix operators: a.b++ is parsed (a.b)++ and not a.(b++).

## See also
- [Order of evaluation](/c/language/eval_order/)
- [assignment](/c/language/operator_assignment/)
- [incrementdecrement](/c/language/operator_incdec/)
- [arithmetic](/c/language/operator_arithmetic/)
- [logical](/c/language/operator_logical/)
- [comparison](/c/language/operator_comparison/)
- [memberaccess](/c/language/operator_member_access/)
- [other](/c/language/operator_other/)
- [C++ documentation](/cpp/language/operator_precedence/)
