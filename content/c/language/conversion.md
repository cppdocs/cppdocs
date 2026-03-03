---
title: "Implicit conversions"
source_path: "c/language/conversion"
category: "c"
---

When an expression is used in the context where a value of a different type is expected, conversion may occur:

## Notes
Although signed integer overflow in any arithmetic operator is undefined behavior, overflowing a signed integer type in an integer conversion is merely unspecified behavior.

On the other hand, although unsigned integer overflow in any arithmetic operator (and in integer conversion) is a well-defined operation and follows the rules of modulo arithmetic, overflowing an unsigned integer in a floating-to-integer conversion is undefined behavior: the values of real floating type that can be converted to unsigned integer are the values from the open interval (-1; Unnn_MAX+1).

Conversions between pointers and integers (except from pointer to _Bool(until C23)bool(since C23) and(since C99)from integer constant expression with the value zero to pointer), between pointers to objects (except where either to or from is a pointer to void) and conversions between pointers to functions (except when the functions have compatible types) are never implicit and require a [cast operator](/c/language/cast/).

There are no conversions (implicit or explicit) between pointers to functions and pointers to objects (including void*) or integers.

## See also
- [C++ documentation](/cpp/language/implicit_cast/)
