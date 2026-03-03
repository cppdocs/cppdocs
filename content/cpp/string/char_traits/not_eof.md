---
title: "std::char_traits<char>::not_eof, std::char_traits<wchar_t>::not_eof, std::char_traits<char8_t>::not_eof, std::char_traits<char16_t>::not_eof, std::char_traits<char32_t>::not_eof"
source_path: "cpp/string/char_traits/not_eof"
category: "string"
---

Given e, produces a suitable value that is not equivalent to eof.

## Declarations
```cpp
static int_type not_eof( int_type e );
```
_(constexpr since C++11)(noexcept since C++11)_

## Parameters
- `e`: value to analyze

## Return value
e if e and eof value are not equivalent, or some other non-eof value otherwise.

## See also
- [eof](/cpp/string/char_traits/eof/)
