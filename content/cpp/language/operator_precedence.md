---
title: "C++ Operator Precedence"
source_path: "cpp/language/operator"
category: "language"
---

The following table lists the precedence and associativity of C++ operators. Operators are listed top to bottom, in descending precedence. a, b and c are operands.

## Notes
Precedence and associativity are compile-time concepts and are independent from [order of evaluation](/cpp/language/eval_order/), which is a runtime concept.

The standard itself doesn't specify precedence levels. They are derived from the grammar.

[const_cast](/cpp/language/const_cast/), [static_cast](/cpp/language/static_cast/), [dynamic_cast](/cpp/language/dynamic_cast/), [reinterpret_cast](/cpp/language/reinterpret_cast/), [typeid](/cpp/language/typeid/), [sizeof...](/cpp/language/sizeof.../), [noexcept](/cpp/language/noexcept/) and [alignof](/cpp/language/alignof/) are not included since they are never ambiguous.

Some of the operators have [alternate spellings](/cpp/language/operator_alternative/) (e.g., and for &&, or for ||, not for !, etc.).

In C, the ternary conditional operator has higher precedence than assignment operators. Therefore, the expression e = a < d ? a++ : a = d, which is parsed in C++ as e = ((a < d) ? (a++) : (a = d)), will fail to compile in C due to grammatical or semantic constraints in C. See the corresponding C page for details.

## See also
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_precedence/)
