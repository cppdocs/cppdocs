---
title: "std::char_traits<char>::move, std::char_traits<wchar_t>::move, std::char_traits<char8_t>::move, std::char_traits<char16_t>::move, std::char_traits<char32_t>::move"
source_path: "cpp/string/char_traits/move"
category: "string"
---

Copies count characters from the character string pointed to by src to the character string pointed to by dest.

## Declarations
```cpp
static char_type*
move( char_type* dest, const char_type* src, std::size_t count );
```
_(constexpr since C++20)_

## Parameters
- `dest`: pointer to a character string to copy to
- `src`: pointer to a character string to copy from
- `count`: the number of characters to copy

## Return value
dest

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 7 | C++98 | the copy was guaranteed to perform correctly ifsrc is in [dest, dest + count), but not the otherway round (i.e. dest is in [src, src + count)) | also guaranteed |
