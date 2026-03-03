---
title: "std::basic_string_view<CharT,Traits>::find_last_not_of"
source_path: "cpp/string/basic_string_view/find_last_not_of"
category: "string"
since: "C++17"
---

Finds the last character not equal to any of the characters in the given character sequence. The search considers only the interval [0,pos].

## Declarations
```cpp
constexpr size_type
find_last_not_of( basic_string_view v, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_not_of( CharT ch, size_type pos = npos ) const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_not_of( const CharT* s, size_type pos, size_type count ) const;
```
_(since C++17)_

```cpp
constexpr size_type
find_last_not_of( const CharT* s, size_type pos = npos ) const;
```
_(since C++17)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of the string of characters to compare
- `s`: pointer to a string of characters to compare
- `ch`: character to compare

## Return value
Position of the last character not equal to any of the characters in the given string, or [npos](/cpp/string/basic_string_view/npos/) if no such character is found.

## Example
```cpp
#include <string_view>
using std::operator""sv;
 
int main()
{
    static_assert(1 == "BCDEF"sv.find_last_not_of("DEF"));
                    //   ^
    static_assert(2 == "BCDEFG"sv.find_last_not_of("EFG", 3));
                    //    ^
    static_assert(2 == "ABBA"sv.find_last_not_of('A'));
                    //    ^
    static_assert(1 == "ABBA"sv.find_last_not_of('A', 1));
                    //   ^
}
```

## See also
- [find](/cpp/string/basic_string_view/find/)
- [rfind](/cpp/string/basic_string_view/rfind/)
- [find_first_of](/cpp/string/basic_string_view/find_first_of/)
- [find_last_of](/cpp/string/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
