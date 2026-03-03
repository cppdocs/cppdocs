---
title: "C++ keyword: long"
source_path: "cpp/keyword/long"
category: "keyword"
---

[long type modifier](/cpp/language/types/#Modifiers)

## Example
```cpp
#include <climits>
#include <concepts>
#include <iostream>
#include <limits>
#include <locale>
 
static_assert(
    sizeof(long) >= 32 / CHAR_BIT &&
    sizeof(unsigned long) >= 32 / CHAR_BIT &&
    std::numeric_limits<long>::min() <= -2'147'483'647l - 1 && //'
    std::numeric_limits<long>::max() >= 2'147'483'647l && //'
    std::numeric_limits<unsigned long>::max() >= 4'294'967'295ul); //'
 
// 'long long' and 'unsigned long long' are available since C++11
static_assert(
    sizeof(long long) >= 64 / CHAR_BIT &&
    sizeof(unsigned long long) >= 64 / CHAR_BIT &&
    std::numeric_limits<long long>::min() <= -9'223'372'036'854'775'807ll - 1 &&
    std::numeric_limits<long long>::max() >= 9'223'372'036'854'775'807ll &&
    std::numeric_limits<unsigned long long>::max() >= 18'446'744'073'709'551'615ull);
 
// concepts are available since C++20
static_assert(
    std::integral<long> &&
    std::integral<long long> &&
    std::integral<unsigned long> &&
    std::integral<unsigned long long> &&
    std::floating_point<long double>);
// Note that 'long' cannot modify 'float'
 
static_assert(
    std::same_as<decltype(0l), signed long int> &&
    std::same_as<decltype(0ll), signed long long int> &&
    std::same_as<decltype(0ul), unsigned long int> &&
    std::same_as<decltype(0ull), unsigned long long int> &&
    std::same_as<decltype(0.l), long double>);
 
template <typename T, typename... Ts>
concept all_same = (... and std::same_as <T, Ts>);
 
static_assert(
    all_same<long, long int, signed long, signed long int> &&
    all_same<unsigned long, unsigned long int> &&
    all_same<long long, long long int, signed long long, signed long long int> &&
    all_same<unsigned long long, unsigned long long int>);
 
#define OUT(...) std::cout << #__VA_ARGS__ << " = " << __VA_ARGS__ << '\n'
 
int main()
{
    std::cout.imbue(std::locale("en_US.UTF-8"));
 
    OUT(sizeof(long));
    OUT(std::numeric_limits<long>::min());
    OUT(std::numeric_limits<long>::max());
    OUT(std::numeric_limits<unsigned long>::max());
 
    OUT(sizeof(long long));
    OUT(std::numeric_limits<long long>::min());
    OUT(std::numeric_limits<long long>::max());
    OUT(std::numeric_limits<unsigned long long>::max());
}
 
#undef OUT
```

## See also
- [Fundamental types](/cpp/language/types/)
- [void](/cpp/keyword/void/)
- [std::nullptr_t](/cpp/types/nullptr_t/)
- [Integral types](/cpp/language/types/#Integral_types)
- [int](/cpp/keyword/int/)
- [Modifiers](/cpp/language/types/#Modifiers)
- [signed](/cpp/keyword/signed/)
- [unsigned](/cpp/keyword/unsigned/)
- [short](/cpp/keyword/short/)
- [Boolean type](/cpp/language/types/#Boolean_type)
- [bool](/cpp/keyword/bool/)
- [Boolean literals](/cpp/language/bool_literal/)
- [false](/cpp/keyword/false/)
- [true](/cpp/keyword/true/)
- [Character types](/cpp/language/types/#Character_types)
- [char](/cpp/keyword/char/)
- [char8_t](/cpp/keyword/char8_t/)
- [char16_t](/cpp/keyword/char16_t/)
- [char32_t](/cpp/keyword/char32_t/)
- [wchar_t](/cpp/keyword/wchar_t/)
- [Floating-point types](/cpp/language/types/#Floating-point_types)
- [float](/cpp/keyword/float/)
- [double](/cpp/keyword/double/)
