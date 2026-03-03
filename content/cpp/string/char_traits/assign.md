---
title: "std::char_traits<char>::assign, std::char_traits<wchar_t>::assign, std::char_traits<char8_t>::assign, std::char_traits<char16_t>::assign, std::char_traits<char32_t>::assign"
source_path: "cpp/string/char_traits/assign"
category: "string"
---

1) Assigns c2 to c1, behaves identically to c1 = c2.

## Declarations
```cpp
static void assign( char_type& c1, const char_type& c2 );
```
_(noexcept since C++11)(constexpr since C++17)_

```cpp
static char_type* assign( char_type* ptr, std::size_t count, char_type c2 );
```
_(constexpr since C++20)_

## Parameters
- `c1`: character to assign to
- `c2`: character value to assign
- `ptr`: pointer to a character sequence to assign to
- `count`: the length of the character sequence
