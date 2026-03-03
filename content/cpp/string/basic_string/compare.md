---
title: "std::basic_string<CharT,Traits,Allocator>::compare"
source_path: "cpp/string/basic_string/compare"
category: "string"
---

Compares two character sequences.

## Declarations
```cpp
int compare( const basic_string& str ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
int compare( size_type pos1, size_type count1,
const basic_string& str ) const;
```
_(constexpr since C++20)_

```cpp
int compare( size_type pos1, size_type count1,
const basic_string& str,
size_type pos2, size_type count2 ) const;
```
_(until C++14)_

```cpp
int compare( size_type pos1, size_type count1,
const basic_string& str,
size_type pos2, size_type count2 = npos ) const;
```
_(since C++14) (constexpr since C++20)_

```cpp
int compare( const CharT* s ) const;
```
_(constexpr since C++20)_

```cpp
int compare( size_type pos1, size_type count1,
const CharT* s ) const;
```
_(constexpr since C++20)_

```cpp
int compare( size_type pos1, size_type count1,
const CharT* s, size_type count2 ) const;
```
_(constexpr since C++20)_

```cpp
template< class StringViewLike >
int compare( const StringViewLike& t ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
int compare( size_type pos1, size_type count1,
const StringViewLike& t ) const;
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
int compare( size_type pos1, size_type count1,
const StringViewLike& t,
size_type pos2, size_type count2 = npos) const;
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: other string to compare to
- `s`: pointer to the character string to compare to
- `count1`: number of characters of this string to compare
- `pos1`: position of the first character in this string to compare
- `count2`: number of characters of the given string to compare
- `pos2`: position of the first character of the given string to compare
- `t`: object (convertible to std::basic_string_view) to compare to

## Notes
For the situations when three-way comparison is not required, [std::basic_string](/cpp/string/basic_string/) provides the usual [relational operators](/cpp/string/basic_string/operator_cmp/) (<, <=, ==, >, etc).

By default (with the default [std::char_traits](/cpp/string/char_traits/)), this function is not locale-sensitive. See [std::collate::compare](/cpp/locale/collate/compare/) for locale-aware three-way string comparison.

## Example
```cpp
#include <cassert>
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
 
void print_compare_result(std::string_view str1,
                          std::string_view str2,
                          int compare_result)
{
    if (compare_result < 0)
        std::cout << std::quoted(str1) << " comes before "
                  << std::quoted(str2) << ".\n";
    else if (compare_result > 0)
        std::cout << std::quoted(str2) << " comes before "
                  << std::quoted(str1) << ".\n";
    else
        std::cout << std::quoted(str1) << " and "
                  << std::quoted(str2) << " are the same.\n";
}
 
int main()
{
    std::string batman{"Batman"};
    std::string superman{"Superman"};
    int compare_result{0};
 
    // 1) Compare with other string
    compare_result = batman.compare(superman);
    std::cout << "1) ";
    print_compare_result("Batman", "Superman", compare_result);
 
    // 2) Compare substring with other string
    compare_result = batman.compare(3, 3, superman);
    std::cout << "2) ";
    print_compare_result("man", "Superman", compare_result);
 
    // 3) Compare substring with other substring
    compare_result = batman.compare(3, 3, superman, 5, 3);
    std::cout << "3) ";
    print_compare_result("man", "man", compare_result);
 
    // Compare substring with other substring
    // defaulting to end of other string
    assert(compare_result == batman.compare(3, 3, superman, 5));
 
    // 4) Compare with char pointer
    compare_result = batman.compare("Superman");
    std::cout << "4) ";
    print_compare_result("Batman", "Superman", compare_result);
 
    // 5) Compare substring with char pointer
    compare_result = batman.compare(3, 3, "Superman");
    std::cout << "5) ";
    print_compare_result("man", "Superman", compare_result);
 
    // 6) Compare substring with char pointer substring
    compare_result = batman.compare(0, 3, "Superman", 5);
    std::cout << "6) ";
    print_compare_result("Bat", "Super", compare_result);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 5 | C++98 | the parameter count2 of overload (6)had a default argument npos | default argument removed,split to overloads (5) and (6) |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2946 | C++17 | overload (7) caused ambiguity in some cases | avoided by making it a template |
| P1148R0 | C++17 | noexcept for overload (7) was accidentallydropped by the resolution of LWG2946 | restored |

## See also
- [operator==operator!=operator<operator>operator<=operator>=operator<=>](/cpp/string/basic_string/operator_cmp/)
- [substr](/cpp/string/basic_string/substr/)
- [collate](/cpp/locale/collate/)
- [strcoll](/cpp/string/byte/strcoll/)
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [compare](/cpp/string/basic_string_view/compare/)
