---
title: "std::basic_string<CharT,Traits,Allocator>::starts_with"
source_path: "cpp/string/basic_string/starts_with"
category: "string"
since: "C++20"
---

Checks if the string begins with the given prefix. The prefix may be one of the following:

## Declarations
```cpp
constexpr bool
starts_with( std::basic_string_view<CharT,Traits> sv ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool
starts_with( CharT ch ) const noexcept;
```
_(since C++20)_

```cpp
constexpr bool
starts_with( const CharT* s ) const;
```
_(since C++20)_

## Parameters
- `sv`: a string view which may be a result of implicit conversion from another std::basic_string
- `ch`: a single character
- `s`: a null-terminated character string

## Return value
true if the string begins with the provided prefix, false otherwise.

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
#include <string>
#include <string_view>
 
int main()
{
    using namespace std::literals;
 
    const auto str = "Hello, C++20!"s;
 
    assert
    (""
        && str.starts_with("He"sv)  // (1)
        && !str.starts_with("he"sv) // (1)
        && str.starts_with("He"s)   // (1) implicit conversion string to string_view
        && !str.starts_with("he"s)  // (1) implicit conversion string to string_view
        && str.starts_with('H')     // (2)
        && !str.starts_with('h')    // (2)
        && str.starts_with("He")    // (3)
        && !str.starts_with("he")   // (3)
    );
}
```

## See also
- [ends_with](/cpp/string/basic_string/ends_with/)
- [starts_with](/cpp/string/basic_string_view/starts_with/)
- [ends_with](/cpp/string/basic_string_view/ends_with/)
- [contains](/cpp/string/basic_string/contains/)
- [contains](/cpp/string/basic_string_view/contains/)
- [compare](/cpp/string/basic_string/compare/)
- [substr](/cpp/string/basic_string/substr/)
