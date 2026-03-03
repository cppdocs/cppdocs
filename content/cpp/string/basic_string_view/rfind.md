---
title: "std::basic_string_view<CharT,Traits>::rfind"
source_path: "cpp/string/basic_string_view/rfind"
category: "string"
since: "C++17"
---

Finds the last substring that is equal to the given character sequence. The search begins at pos and proceeds from right to left (thus, the found substring, if any, cannot begin in a position following pos). If [npos](/cpp/string/basic_string_view/npos/) or any value not smaller than [size()](/cpp/string/basic_string_view/size/)- 1 is passed as pos, the whole string will be searched.

## Declarations
```cpp
constexpr size_type rfind( basic_string_view v, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type rfind( CharT ch, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type rfind( const CharT* s, size_type pos, size_type count ) const;
```
_(since C++17)_

```cpp
constexpr size_type rfind( const CharT* s, size_type pos = npos ) const;
```
_(since C++17)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for

## Return value
Position of the first character of the found substring or [npos](/cpp/string/basic_string_view/npos/) if no such substring is found.

## Example
```cpp
#include <string_view>
 
int main()
{
    using namespace std::literals;
    constexpr auto N = std::string_view::npos;
 
    static_assert(true
        && (6 == "AB AB AB"sv.rfind("AB"))
        && (6 == "AB AB AB"sv.rfind("ABCD", N, 2))
        && (3 == "AB AB AB"sv.rfind("AB", 5))
        && (0 == "AB CD EF"sv.rfind("AB", 0))
        && (2 == "B AB AB "sv.rfind("AB", 2))
        && (N == "B AB AB "sv.rfind("AB", 1))
        && (5 == "B AB AB "sv.rfind('A'))
        && (4 == "AB AB AB"sv.rfind('B', 4))
        && (N == "AB AB AB"sv.rfind('C'))
    );
}
```

## See also
- [find](/cpp/string/basic_string_view/find/)
- [find_first_of](/cpp/string/basic_string_view/find_first_of/)
- [find_last_of](/cpp/string/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/)
- [rfind](/cpp/string/basic_string/rfind/)
