---
title: "Variadic arguments"
source_path: "cpp/language/variadic_arguments"
category: "language"
---

Allows a function to accept any number of extra arguments.

## Notes
In the C programming language until C23, at least one named parameter must appear before the ellipsis parameter, so R printz(...); is not valid until C23. In C++, this form is allowed even though the arguments passed to such function are not accessible, and is commonly used as the fallback overload in [SFINAE](/cpp/language/sfinae/), exploiting the lowest priority of the ellipsis conversion in [overload resolution](/cpp/language/overload_resolution/).

This syntax for variadic arguments was introduced in 1983 C++ without the comma before the ellipsis. When C89 adopted function prototypes from C++, it replaced the syntax with one requiring the comma. For compatibility, C++98 accepts both C++-style f(int n...) and C-style f(int n, ...). The original C++-style grammar is deprecated since C++26.

The comma can be used in abbreviated function templates to make the ellipsis signify a variadic function instead of a variadic template:

void f1(auto...); // same as template<class... Ts> void f3(Ts...)void f2(auto, ...); // same as template<class T> void f3(T, ...)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 506 | C++98 | passing non-POD class arguments to anellipsis resulted in undefined behavior | passing such arguments isconditionally-supported withimplementation-defined semantics |
| CWG 634 | C++98 | conditionally-supported class typesmade some SFINAE idioms not work | always supported if unevaluated |
| CWG 2247 | C++11 | no restriction on passing parameterpack or lambda capture to va_start | made ill-formed,no diagnostic required |
| CWG 2347 | C++11 | it was unclear whether scoped enumerations passed toan ellipsis are subject to default argument promotions | passing scoped enumerationsis conditionally-supported withimplementation-defined semantics |

## See also
- [C documentation](/c/language/variadic/)
- [C documentation](/c/language/conversion/)
