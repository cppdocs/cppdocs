---
title: "Fixed width integer types (since C++11)"
source_path: "cpp/types/integer"
category: "types"
since: "C++11"
---

[1 Types](#Types)

## Notes
Because C++ interprets a character immediately following a string literal as a [user-defined string literal](/cpp/language/user_literal/), C code such as printf("%"PRId64"\n",n); is invalid C++ and requires a space before PRId64.

The C99 standard suggests that C++ implementations should not define the above limit, constant, or format macros unless the macros __STDC_LIMIT_MACROS, __STDC_CONSTANT_MACROS or __STDC_FORMAT_MACROS (respectively) are defined before including the relevant C header (stdint.h or inttypes.h). This recommendation was not adopted by any C++ standard and was removed in C11. However, some implementations (such as glibc 2.17) try to apply this rule, and it may be necessary to define the __STDC macros; C++ compilers may try to work around this by automatically defining them in some circumstances.

std::int8_t may be signed char and std::uint8_t may be unsigned char, but neither can be char regardless of its signedness (because char is not considered a "signed integer type" or "unsigned integer type").

## Example
```cpp
#include <cinttypes>
#include <cstdio>
 
int main()
{
    std::printf("%zu\n", sizeof(std::int64_t));
    std::printf("%s\n", PRId64);
    std::printf("%+" PRId64 "\n", INT64_MIN);
    std::printf("%+" PRId64 "\n", INT64_MAX);
 
    std::int64_t n = 7;
    std::printf("%+" PRId64 "\n", n);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2820 | C++11 | the requirements for optional typedef names and macros were inconsistent with C | made consistent |

## See also
- [Fundamental types](/cpp/language/types/)
- [C documentation](/c/types/integer/)
