---
title: "std::basic_string_view<CharT,Traits>::starts_with"
source_path: "cpp/string/basic_string_view/starts_with"
category: "string"
since: "C++20"
---

Checks if the string view begins with the given prefix, where

## Declarations
```cpp
constexpr bool starts_with( basic_string_view sv ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool starts_with( CharT ch ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool starts_with( const CharT* s ) const;
```
_(since C++20)_

## Parameters
- `sv`: a string view which may be a result of implicit conversion from std::basic_string
- `ch`: a single character
- `s`: a null-terminated character string

## Return value
true if the string view begins with the provided prefix, false otherwise.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_starts_ends_with
201711L
(C++20)
String prefix and suffix checking: starts_with() and ends_with()

## Example
```cpp
#include <cassert>
#include <string_view>
 
int main()
{
    using namespace std::literals;
 
    assert
    (""
        // (1) starts_with( basic_string_view )
        && "https://cppreference.com"sv.starts_with("http"sv) == true
        && "https://cppreference.com"sv.starts_with("ftp"sv) == false
 
        // (2) starts_with( CharT )
        && "C++20"sv.starts_with('C') == true
        && "C++20"sv.starts_with('J') == false
 
        // (3) starts_with( const CharT* )
        && std::string_view("string_view").starts_with("string") == true
        && std::string_view("string_view").starts_with("String") == false
    );
}
```

## See also
- [ends_with](/cpp/string/basic_string_view/ends_with/)
- [starts_with](/cpp/string/basic_string/starts_with/)
- [ends_with](/cpp/string/basic_string/ends_with/)
- [contains](/cpp/string/basic_string/contains/)
- [contains](/cpp/string/basic_string_view/contains/)
- [compare](/cpp/string/basic_string_view/compare/)
