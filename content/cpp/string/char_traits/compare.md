---
title: "std::char_traits<char>::compare, std::char_traits<wchar_t>::compare, std::char_traits<char8_t>::compare, std::char_traits<char16_t>::compare, std::char_traits<char32_t>::compare"
source_path: "cpp/string/char_traits/compare"
category: "string"
---

Compares the first count characters of the character strings s1 and s2. The comparison is done lexicographically.

## Declarations
```cpp
static int compare( const char_type* s1, const char_type* s2,
std::size_t count );
```
_(constexpr since C++17)_

## Parameters
- `s1, s2`: pointers to character strings to compare
- `count`: the number of characters to compare from each character string

## Return value
Negative value if s1 is less than s2.
