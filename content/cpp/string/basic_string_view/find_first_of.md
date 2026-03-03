---
title: "std::basic_string_view<CharT,Traits>::find_first_of"
source_path: "cpp/string/basic_string_view/find_first_of"
category: "string"
since: "C++17"
---

Finds the first character equal to any of the characters in the given character sequence.

## Declarations
```cpp
constexpr size_type
find_first_of( basic_string_view v, size_type pos = 0 ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_first_of( CharT ch, size_type pos = 0 ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_first_of( const CharT* s, size_type pos, size_type count ) const;
```
_(since C++17)_

```cpp
constexpr size_type
find_first_of( const CharT* s, size_type pos = 0 ) const;
```
_(since C++17)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of the string of characters to search for
- `s`: pointer to a string of characters to search for
- `ch`: character to search for

## Return value
Position of the first occurrence of any character of the substring, or [npos](/cpp/string/basic_string_view/npos/) if no such character is found.

## Example
```cpp
#include <string_view>
 
using namespace std::literals;
constexpr auto N = std::string_view::npos;
 
constexpr bool is_white_space(const char c)
{
    return " \t\n\f\r\v"sv.find_first_of(c) != N;
};
 
static_assert(
    1 == "alignas"sv.find_first_of("klmn"sv) &&
      //   └─────────────────────────┘
    N == "alignof"sv.find_first_of("wxyz"sv) &&
      //
    3 == "concept"sv.find_first_of("bcde"sv, /* pos= */ 1) &&
      //     └───────────────────────┘
    N == "consteval"sv.find_first_of("oxyz"sv, /* pos= */ 2) &&
      //
    6 == "constexpr"sv.find_first_of('x') &&
      //        └─────────────────────┘
    N == "constinit"sv.find_first_of('x') &&
      //
    6 == "const_cast"sv.find_first_of('c', /* pos= */ 4) &&
      //        └──────────────────────┘
    N == "continue"sv.find_first_of('c', /* pos= */ 42) &&
      //
    5 == "co_await"sv.find_first_of("cba", /* pos= */ 4) &&
      //       └───────────────────────┘
    7 == "decltype"sv.find_first_of("def", /* pos= */ 2, /* count= */ 2) &&
      //         └────────────────────┘
    N == "decltype"sv.find_first_of("def", /* pos= */ 2, /* count= */ 1) &&
      //
    is_white_space(' ') && is_white_space('\r') && !is_white_space('\a')
);
 
int main() {}
```

## See also
- [find](/cpp/string/basic_string_view/find/)
- [rfind](/cpp/string/basic_string_view/rfind/)
- [find_last_of](/cpp/string/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
