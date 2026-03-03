---
title: "Constant expressions"
source_path: "c/language/constant_expression"
category: "c"
---

Several varieties of expressions are known as constant expressions

## Notes
If an expression evaluates to a value that is not representable by its type, it cannot be used as a constant expression.

Implementations may accept other forms of constant expressions. However, these constant expressions are not considered as integer constant expressions, arithmetic constant expressions, or address constant expressions, and thus cannot be used in the contexts requiring these kinds of constant expressions. For example, int arr[(int)+1.0]; declares a VLA.

## See also
- [C++ documentation](/cpp/language/constant_expression/)
