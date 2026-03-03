---
title: "std::basic_string_view<CharT,Traits>::compare"
source_path: "cpp/string/basic_string_view/compare"
category: "string"
since: "C++17"
---

Compares two character sequences.

## Declarations
```cpp
constexpr int compare( basic_string_view v ) const noexcept;
```
_(since C++17)_

```cpp
constexpr int compare( size_type pos1, size_type count1,
basic_string_view v ) const;
```
_(since C++17)_

```cpp
constexpr int compare( size_type pos1, size_type count1, basic_string_view v,
size_type pos2, size_type count2 ) const;
```
_(since C++17)_

```cpp
constexpr int compare( const CharT* s ) const;
```
_(since C++17)_

```cpp
constexpr int compare( size_type pos1, size_type count1,
const CharT* s ) const;
```
_(since C++17)_

```cpp
constexpr int compare( size_type pos1, size_type count1,
const CharT* s, size_type count2 ) const;
```
_(since C++17)_

## Parameters
- `v`: view to compare
- `s`: pointer to the character string to compare to
- `count1`: number of characters of this view to compare
- `pos1`: position of the first character in this view to compare
- `count2`: number of characters of the given view to compare
- `pos2`: position of the first character of the given view to compare

## Return value
Negative value if this view is less than the other character sequence, zero if the both character sequences are equal, positive value if this view is greater than the other character sequence.

## Example
```cpp
#include <string_view>
 
int main()
{
    using std::operator""sv;
    static_assert("abc"sv.compare("abcd"sv) < 0);
    static_assert("abcd"sv.compare("abc"sv) > 0);
    static_assert("abc"sv.compare("abc"sv) == 0);
    static_assert(""sv.compare(""sv) == 0);
}
```

## See also
- [compare](/cpp/string/basic_string/compare/)
- [operator==operator!=operator<operator>operator<=operator>=operator<=>](/cpp/string/basic_string_view/operator_cmp/)
