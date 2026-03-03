---
title: "std::char_traits<char>::to_int_type, std::char_traits<wchar_t>::to_int_type, std::char_traits<char8_t>::to_int_type, std::char_traits<char16_t>::to_int_type, std::char_traits<char32_t>::to_int_type"
source_path: "cpp/string/char_traits/to_int_type"
category: "string"
---

Converts c to int_type.

## Declarations
```cpp
static int_type to_int_type( char_type c );
```
_(constexpr since C++11)(noexcept since C++11)_

## Parameters
- `c`: value to convert

## Return value
A value equivalent to c.

## Notes
For every valid value of char_type, there must be a unique value of int_type distinct from [eof()](/cpp/string/char_traits/eof/).
