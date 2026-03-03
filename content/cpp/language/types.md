---
title: "Fundamental types"
source_path: "cpp/language/types"
header: "<cstddef>"
category: "language"
since: "C++11"
---

(See also [type](/cpp/language/type-id/) for type system overview and [the list of type-related utilities](/cpp/types/) that are provided by the C++ library)

## Declarations
```cpp
typedef decltype(nullptr) nullptr_t;
```
_(since C++11)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_unicode_characters
200704L
(C++11)
New character types (char16_t and char32_t)
__cpp_char8_t
201811L
(C++20)
char8_t
202207L
(C++23)
char8_t compatibility and portability fix (allow initialization of (unsigned) char arrays from UTF-8 string literals)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 238 | C++98 | the constraints placed on a floating-point implementation was unspecified | specified asno constraint |
| CWG 1759 | C++11 | char is not guaranteed to be able to represent UTF-8 code unit 0x80 | guaranteed |
| CWG 2689 | C++11 | cv-qualified std::nullptr_t was not a fundemental type | it is |
| CWG 2723 | C++98 | the ranges of representable values for floating-point types were not specified | specified |
| P2460R2 | C++98 | wchar_t was required to be able to represent distinct codes for all membersof the largest extended character set specified among the supported locales | not required |

## See also
- [The C++ type system overview](/cpp/language/type-id/)
- [Const-volatility (cv) specifiers and qualifiers](/cpp/language/cv/)
- [Storage duration specifiers](/cpp/language/storage_duration/)
- [C documentation](/c/language/arithmetic_types/)
