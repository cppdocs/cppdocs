---
title: "std::char_traits<char>::copy, std::char_traits<wchar_t>::copy, std::char_traits<char8_t>::copy, std::char_traits<char16_t>::copy, std::char_traits<char32_t>::copy"
source_path: "cpp/string/char_traits/copy"
category: "string"
---

Copies count characters from the character string pointed to by src to the character string pointed to by dest.

## Declarations
```cpp
static char_type*
copy( char_type* dest, const char_type* src, std::size_t count );
```
_(constexpr since C++20)_

## Parameters
- `dest`: pointer to a character string to copy to
- `src`: pointer to a character string to copy from
- `count`: the number of characters to copy

## Return value
dest

## See also
- [assign](/cpp/string/char_traits/assign/)
