---
title: "C++ keyword: short"
source_path: "cpp/keyword/short"
category: "keyword"
---

[short type modifier](/cpp/language/types/#Modifiers)

## Example
```cpp
#include <climits>
#include <concepts>
#include <iostream>
#include <limits>
 
static_assert(sizeof(short) >= 16 / CHAR_BIT);
static_assert(sizeof(unsigned short) >= 16 / CHAR_BIT);
static_assert(std::numeric_limits<short>::min() <= -32'768); //'
static_assert(std::numeric_limits<short>::max() >= 32'767); //'
static_assert(std::numeric_limits<unsigned short>::max() >= 65'535u); //'
 
// concepts are available since C++20
static_assert(std::integral<short> and std::integral<unsigned short>);
 
template <typename T, typename... Ts>
concept all_same = (... and std::same_as <T, Ts>);
 
static_assert(all_same<short, short int, signed short, signed short int>);
static_assert(all_same<unsigned short, unsigned short int>);
 
#define OUT(...) std::cout << #__VA_ARGS__ << " = " << __VA_ARGS__ << '\n'
 
int main()
{
    OUT(sizeof(short));
    OUT(sizeof(unsigned short));
    OUT(std::numeric_limits<short>::min());
    OUT(std::numeric_limits<short>::max());
    OUT(std::numeric_limits<unsigned short>::max());
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
- [long](/cpp/keyword/long/)
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
