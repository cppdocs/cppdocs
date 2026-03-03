---
title: "std::char_traits<char>::find, std::char_traits<wchar_t>::find, std::char_traits<char8_t>::find, std::char_traits<char16_t>::find, std::char_traits<char32_t>::find"
source_path: "cpp/string/char_traits/find"
category: "string"
---

Searches for character ch within the first count characters of the sequence pointed to by ptr.

## Declarations
```cpp
static const char_type*
find( const char_type* ptr, std::size_t count, const char_type& ch );
```
_(constexpr since C++17)_

## Parameters
- `ptr`: pointer to a character string to search
- `count`: the number of characters to analyze
- `ch`: the character to search for

## Return value
A pointer to the first character in the range specified by [ptr,ptr + count) that compares equal to ch, or a null pointer if not found.
