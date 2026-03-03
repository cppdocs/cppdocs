---
title: "std::char_traits<char>::eq/lt, std::char_traits<wchar_t>::eq/lt, std::char_traits<char8_t>::eq/lt, std::char_traits<char16_t>::eq/lt, std::char_traits<char32_t>::eq/lt"
source_path: "cpp/string/char_traits/cmp"
category: "string"
---

Compares two characters.

## Declarations
```cpp
static bool eq( char_type a, char_type b );
```
_(constexpr since C++11)(noexcept since C++11)_

```cpp
static bool lt( char_type a, char_type b );
```
_(constexpr since C++11)(noexcept since C++11)_

## Parameters
- `a, b`: character values to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 467 | C++98 | for std::char_traits<char>, the semantics of eq() and lt()are the same as the built-in == and < on char respectively[1] | changed to built-in == and< on unsigned char |
