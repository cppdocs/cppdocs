---
title: "typeof operators (since C23)"
source_path: "c/language/typeof"
category: "c"
---

Determines the type of an object.

## Notes
typeof and typeof_unqual are collectively called the typeof operators. The typeof operators cannot be applied to bit-field members. If the type of the operand is a variably modified type, the operand is evaluated; otherwise, the operand is not evaluated. The result of the typeof_unqual operator is the non-atomic unqualified type that would result from the typeof operator. The typeof operator preserves all qualifiers.

## Example
This section is incompleteReason: no example

## See also
- [C++ documentation](/cpp/language/decltype/)
