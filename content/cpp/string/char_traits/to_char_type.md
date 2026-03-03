---
title: "std::char_traits<char>::to_char_type, std::char_traits<wchar_t>::to_char_type, std::char_traits<char8_t>::to_char_type, std::char_traits<char16_t>::to_char_type, std::char_traits<char32_t>::to_char_type"
source_path: "cpp/string/char_traits/to_char_type"
category: "string"
---

Converts c to char_type. If there is no equivalent char_type value (such as when c is a copy of the [eof()](/cpp/string/char_traits/eof/) value), the result is unspecified.

## Declarations
```cpp
static char_type to_char_type( int_type c );
```
_(constexpr since C++11)(noexcept since C++11)_

## Parameters
- `c`: value to convert

## Return value
A value equivalent to c.
