---
title: "std::basic_string<CharT,Traits,Allocator>::contains"
source_path: "cpp/string/basic_string/contains"
category: "string"
since: "C++23"
---

Checks if the string contains the given substring. The substring may be one of the following:

## Declarations
```cpp
constexpr bool
contains( std::basic_string_view<CharT,Traits> sv ) const noexcept;
```
_(since C++23)_

```cpp
constexpr bool
contains( CharT ch ) const noexcept;
```
_(since C++23)_

```cpp
constexpr bool
contains( const CharT* s ) const;
```
_(since C++23)_

## Parameters
- `sv`: a string view which may be a result of implicit conversion from another std::basic_string
- `ch`: a single character
- `s`: a null-terminated character string

## Return value
true if the string contains the provided substring, false otherwise.

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
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
#include <type_traits>
 
template<typename SubstrType>
void test_substring(const std::string& str, SubstrType subs)
{
    constexpr char delim = std::is_scalar_v<SubstrType> ? '\'' : '\"';
    std::cout << std::quoted(str)
              << (str.contains(subs) ? " contains "
                                     : " does not contain ")
              << std::quoted(std::string{subs}, delim) << '\n';
}
 
int main()
{
    using namespace std::literals;
 
    auto helloWorld = "hello world"s;
 
    test_substring(helloWorld, "hello"sv);
    test_substring(helloWorld, "goodbye"sv);
    test_substring(helloWorld, 'w');
    test_substring(helloWorld, 'x');
}
```

## See also
- [starts_with](/cpp/string/basic_string/starts_with/)
- [ends_with](/cpp/string/basic_string/ends_with/)
- [find](/cpp/string/basic_string/find/)
- [substr](/cpp/string/basic_string/substr/)
- [contains](/cpp/string/basic_string_view/contains/)
