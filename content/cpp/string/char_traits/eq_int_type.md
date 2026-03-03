---
title: "std::char_traits<char>::eq_int_type, std::char_traits<wchar_t>::eq_int_type, std::char_traits<char8_t>::eq_int_type, std::char_traits<char16_t>::eq_int_type, std::char_traits<char32_t>::eq_int_type"
source_path: "cpp/string/char_traits/eq_int_type"
category: "string"
---

Checks whether two values of type int_type are equal.

## Declarations
```cpp
static bool eq_int_type( int_type c1, int_type c2 );
```
_(constexpr since C++11)(noexcept since C++11)_

## Parameters
- `c1, c2`: values to compare

## Return value
true if c1 is equal to c2, false otherwise.
