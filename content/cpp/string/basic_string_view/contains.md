---
title: "std::basic_string_view<CharT,Traits>::contains"
source_path: "cpp/string/basic_string_view/contains"
category: "string"
since: "C++23"
---

Checks if the string view contains the given substring, where

## Declarations
```cpp
constexpr bool contains( basic_string_view sv ) const noexcept;
```
_(since C++23)_

```cpp
constexpr bool contains( CharT c ) const noexcept;
```
_(since C++23)_

```cpp
constexpr bool contains( const CharT* s ) const;
```
_(since C++23)_

## Parameters
- `sv`: a string view
- `c`: a single character
- `s`: a null-terminated character string

## Return value
true if the string view contains the provided substring, false otherwise.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_string_contains
202011L
(C++23)
contains functions

## Example
```cpp
#include <string_view>
using namespace std::literals;
 
static_assert
(
    // bool contains(basic_string_view x) const noexcept;
    "https://cppreference.com"sv.contains("cpp"sv) == true and
    "https://cppreference.com"sv.contains("php"sv) == false and
 
    // bool contains(CharT x) const noexcept;
    "C++23"sv.contains('+') == true and
    "C++23"sv.contains('-') == false and
 
    // bool contains(const CharT* x) const;
    std::string_view("basic_string_view").contains("string") == true and
    std::string_view("basic_string_view").contains("String") == false
);
 
int main() {}
```

## See also
- [starts_with](/cpp/string/basic_string_view/starts_with/)
- [ends_with](/cpp/string/basic_string_view/ends_with/)
- [find](/cpp/string/basic_string_view/find/)
- [substr](/cpp/string/basic_string_view/substr/)
- [contains](/cpp/string/basic_string/contains/)
