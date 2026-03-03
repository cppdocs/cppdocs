---
title: "std::basic_string_view<CharT,Traits>::find"
source_path: "cpp/string/basic_string_view/find"
category: "string"
since: "C++17"
---

Finds the first substring equal to the given character sequence.

## Declarations
```cpp
constexpr size_type find( basic_string_view v, size_type pos = 0 ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type find( CharT ch, size_type pos = 0 ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type find( const CharT* s, size_type pos, size_type count ) const;
```
_(since C++17)_

```cpp
constexpr size_type find( const CharT* s, size_type pos = 0 ) const;
```
_(since C++17)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for

## Return value
Position of the first character of the found substring, or [npos](/cpp/string/basic_string_view/npos/) if no such substring is found.

## Example
```cpp
#include <string_view>
 
int main()
{
    using namespace std::literals;
 
    constexpr auto str{" long long int;"sv};
 
    static_assert(
        1 == str.find("long"sv)            && "<- find(v , pos = 0)" &&
        6 == str.find("long"sv, 2)         && "<- find(v , pos = 2)" &&
        0 == str.find(' ')                 && "<- find(ch, pos = 0)" &&
        2 == str.find('o', 1)              && "<- find(ch, pos = 1)" &&
        2 == str.find("on")                && "<- find(s , pos = 0)" &&
        6 == str.find("long double", 5, 4) && "<- find(s , pos = 5, count = 4)"
    );
 
    static_assert(str.npos == str.find("float"));
}
```

## See also
- [rfind](/cpp/string/basic_string_view/rfind/)
- [find_first_of](/cpp/string/basic_string_view/find_first_of/)
- [find_last_of](/cpp/string/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/)
- [find](/cpp/string/basic_string/find/)
