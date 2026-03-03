---
title: "Integer literal"
source_path: "cpp/language/integer_literal"
category: "language"
---

Allows values of integer type to be used in expressions directly.

## Notes
Letters in the integer literals are case-insensitive: 0xDeAdBeEfU and 0XdeadBEEFu represent the same number (one exception is the long-long-suffix, which is either ll or LL, never lL or Ll)(since C++11).

There are no negative integer literals. Expressions such as -1 apply the [unary minus operator](/cpp/language/operator_arithmetic/) to the value represented by the literal, which may involve implicit type conversions.

In C prior to C99 (but not in C++), unsuffixed decimal values that do not fit in long int are allowed to have the type unsigned long int.

When used in a controlling expression of [#if](/cpp/preprocessor/conditional/) or [#elif](/cpp/preprocessor/conditional/), all signed integer constants act as if they have type [std::intmax_t](/cpp/types/integer/) and all unsigned integer constants act as if they have type [std::uintmax_t](/cpp/types/integer/).

Due to [maximal munch](/cpp/language/translation_phases/#maximal_munch), hexadecimal integer literals ending in e and E, when followed by the operators + or -, must be separated from the operator with whitespace or parentheses in the source:

Otherwise, a single invalid preprocessing number token is formed, which causes further analysis to fail.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <type_traits>
 
int main()
{
    std::cout << 123 << '\n'
              << 0123 << '\n'
              << 0x123 << '\n'
              << 0b10 << '\n'
              << 12345678901234567890ull << '\n'
              << 12345678901234567890u << '\n'; // the type is unsigned long long
                                                // even without a long long suffix
 
//  std::cout << -9223372036854775808 << '\n'; // error: the value
               // 9223372036854775808 cannot fit in signed long long, which is the
               // biggest type allowed for unsuffixed decimal integer literal
    std::cout << -9223372036854775808u << '\n'; // unary minus applied to unsigned
               // value subtracts it from 2^64, this gives 9223372036854775808
    std::cout << -9223372036854775807 - 1 << '\n'; // correct way to calculate
                                                   // the value -9223372036854775808
 
#if __cpp_size_t_suffix >= 202011L // C++23
    static_assert(std::is_same_v<decltype(0UZ), std::size_t>);
    static_assert(std::is_same_v<decltype(0Z), std::make_signed_t<std::size_t>>);
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2698 | C++23 | an integer literal with size-suffix could have an extended integer type | ill-formed if too large |

## See also
- [user-defined literals](/cpp/language/user_literal/)
- [C documentation](/c/language/integer_constant/)
