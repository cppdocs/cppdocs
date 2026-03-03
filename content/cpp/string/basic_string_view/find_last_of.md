---
title: "std::basic_string_view<CharT,Traits>::find_last_of"
source_path: "cpp/string/basic_string_view/find_last_of"
category: "string"
since: "C++17"
---

Finds the last character equal to one of characters in the given character sequence. Exact search algorithm is not specified. The search considers only the interval [0,pos]. If the character is not present in the interval, [npos](/cpp/string/basic_string_view/npos/) will be returned.

## Declarations
```cpp
constexpr size_type
find_last_of( basic_string_view v, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_of( CharT ch, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_of( const CharT* s, size_type pos, size_type count ) const;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_of( const CharT* s, size_type pos = npos ) const;
```
_(since C++17)_

## Parameters
- `v`: view to search for
- `pos`: position at which the search is to finish
- `count`: length of the string of characters to search for
- `s`: pointer to a string of characters to search for
- `ch`: character to search for

## Return value
Position of the last occurrence of any character of the substring, or [npos](/cpp/string/basic_string_view/npos/) if no such character is found.

## Example
```cpp
#include <string_view>
 
using namespace std::literals;
constexpr auto N = std::string_view::npos;
 
static_assert(
    5 == "delete"sv.find_last_of("cdef"sv) &&
      //       └────────────────────┘
    N == "double"sv.find_last_of("fghi"sv) &&
      //
    0 == "else"sv.find_last_of("bcde"sv, 2 /* pos [0..2]: "els" */) &&
      //  └────────────────────────┘
    N == "explicit"sv.find_last_of("abcd"sv, 4 /* pos [0..4]: "expli" */) &&
      //
    3 == "extern"sv.find_last_of('e') &&
      //     └────────────────────┘
    N == "false"sv.find_last_of('x') &&
      //
    0 == "inline"sv.find_last_of('i', 2 /* pos [0..2]: "inl" */) &&
      //  └───────────────────────┘
    N == "mutable"sv.find_last_of('a', 2 /* pos [0..2]: "mut" */) &&
      //
    3 == "namespace"sv.find_last_of("cdef", 3 /* pos [0..3]: "name" */, 3 /* "cde" */) &&
      //     └─────────────────────────┘
    N == "namespace"sv.find_last_of("cdef", 3 /* pos [0..3]: "name" */, 2 /* "cd" */)
);
 
int main() {}
```

## See also
- [find](/cpp/string/basic_string_view/find/)
- [rfind](/cpp/string/basic_string_view/rfind/)
- [find_first_of](/cpp/string/basic_string_view/find_first_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
