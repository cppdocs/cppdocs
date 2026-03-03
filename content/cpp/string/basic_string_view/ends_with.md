---
title: "std::basic_string_view<CharT,Traits>::ends_with"
source_path: "cpp/string/basic_string_view/ends_with"
category: "string"
since: "C++20"
---

Checks if the string view ends with the given suffix, where

## Declarations
```cpp
constexpr bool ends_with( basic_string_view sv ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool ends_with( CharT ch ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool ends_with( const CharT* s ) const;
```
_(since C++20)_

## Parameters
- `sv`: a string view which may be a result of implicit conversion from std::basic_string
- `ch`: a single character
- `s`: a null-terminated character string

## Return value
true if the string view ends with the provided suffix, false otherwise.

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
        // (1) ends_with( basic_string_view sv )
        && std::string_view("https://cppreference.com").ends_with(".com"sv) == true
        && std::string_view("https://cppreference.com").ends_with(".org"sv) == false
 
        // (2) ends_with( CharT c )
        && std::string_view("C++20").ends_with('0') == true
        && std::string_view("C++20").ends_with('3') == false
 
        // (3) ends_with( const CharT* s )
        && std::string_view("string_view").ends_with("view") == true
        && std::string_view("string_view").ends_with("View") == false
    );
}
```

## See also
- [starts_with](/cpp/string/basic_string_view/starts_with/)
- [starts_with](/cpp/string/basic_string/starts_with/)
- [ends_with](/cpp/string/basic_string/ends_with/)
- [contains](/cpp/string/basic_string/contains/)
- [contains](/cpp/string/basic_string_view/contains/)
- [compare](/cpp/string/basic_string_view/compare/)
