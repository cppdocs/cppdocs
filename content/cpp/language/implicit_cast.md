---
title: "Implicit conversions"
source_path: "cpp/language/implicit_cast"
category: "language"
---

Implicit conversions are performed whenever an expression of some type T1 is used in context that does not accept that type, but accepts some other type T2; in particular:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 170 | C++98 | the behavior of pointer-to-member conversions was unclearif the derived class does not have the original member | made clear |
| CWG 172 | C++98 | enumeration type was promoted based on its underlying type | based on its value range instead |
| CWG 330(N4261) | C++98 | the conversion from double* const (*p)[3]to double const * const (*p)[3] was invalid | made valid |
| CWG 519 | C++98 | null pointer values were not guaranteed to bepreserved when converting to another pointer type | always preserved |
| CWG 616 | C++98 | the behavior of lvalue to rvalue conversion ofany uninitialized object and pointer objectsof invalid values was always undefined | indeterminate unsigned charis allowed; use of invalid pointersis implementation-defined |
| CWG 685 | C++98 | the underlying type of an enumeration type wasnot prioritized in integral promotion if it is fixed | prioritized |
| CWG 707 | C++98 | integer to floating point conversionhad defined behavior in all cases | the behavior is undefined ifthe value being converted isout of the destination range |
| CWG 1423 | C++11 | std::nullptr_t was convertible to boolin both direct- and copy-initialization | direct-initialization only |
| CWG 1773 | C++11 | a name expression that appears in a potentially-evaluatedexpression such that the object named is not odr-used mightstill be evaluated during an lvalue-to-rvalue conversion | not evaluated |
| CWG 1781 | C++11 | std::nullptr_t to bool was considered an implicitconversion even though it is only valid for direct-initialization | no longer consideredan implicit conversion |
| CWG 1787 | C++98 | the behavior of reading from an indeterminateunsigned char cached in a register was undefined | made well-defined |
| CWG 1981 | C++11 | contextual conversions considered explicit conversion functions | not considered |
| CWG 2140 | C++11 | it was unclear whether lvalue-to-rvalue conversions fromstd::nullptr_t lvalues fetch these lvalues from memory | not fetched |
| CWG 2310 | C++98 | for derived-to-base pointer conversions andbase-to-derived pointer-to-member conversions,the derived class type could be incomplete | must be complete |
| CWG 2484 | C++20 | char8_t and char16_t had different integralpromotion strategies, but they can fit both of them | char8_t should be promotedin the same way as char16_t |
| CWG 2485 | C++98 | integral promotions involving bit-fields were not specified well | improved the specification |
| CWG 2813 | C++23 | temporary materialization would occur when an explicitobject member function of a class prvalue is invoked | will not occurin this case |
| CWG 2861 | C++98 | a pointer to a type-inaccessible object could beconverted a pointer to a base class subobject | the behavior isundefined in this case |
| CWG 2879 | C++17 | temporary materialization conversion was applied on prvalueas an operand of an operator that expects glvalue | not applied in some cases |
| CWG 2899 | C++98 | lvalue-to-rvalue conversions could be applied to lvaluesdesignating objects with invalid value representations | the behavior isundefined in this case |
| CWG 2901 | C++98 | the result of lvalue-to-rvalue conversion from an unsigned intlvalue referring to an int object with value -1 was unclear | made clear |

## See also
- [const_cast](/cpp/language/const_cast/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [explicit cast](/cpp/language/explicit_cast/)
- [user-defined conversion](/cpp/language/cast_operator/)
- [C documentation](/c/language/conversion/)
