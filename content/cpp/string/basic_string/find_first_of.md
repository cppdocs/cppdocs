---
title: "std::basic_string<CharT,Traits,Allocator>::find_first_of"
source_path: "cpp/string/basic_string/find_first_of"
category: "string"
---

Finds the first character equal to one of the characters in the given character sequence. The search considers only the range [pos,[size()](/cpp/string/basic_string/size/)). If none of the characters in the given character sequence is present in the range, [npos](/cpp/string/basic_string/npos/) will be returned.

## Declarations
```cpp
size_type find_first_of( const basic_string& str, size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type find_first_of( const CharT* s,
size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_first_of( const CharT* s, size_type pos = 0 ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_first_of( CharT ch, size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type
find_first_of( const StringViewLike& t,
size_type pos = 0 ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string identifying characters to search for
- `pos`: position at which to begin searching
- `count`: length of character string identifying characters to search for
- `s`: pointer to a character string identifying characters to search for
- `ch`: character to search for
- `t`: object (convertible to std::basic_string_view) identifying characters to search for

## Return value
Position of the found character or [npos](/cpp/string/basic_string/npos/) if no such character is found.

## Notes
Traits::eq() is used to perform the comparison.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <string_view>
 
int main()
{
    using namespace std::literals;
    std::string::size_type sz;
 
    // (1)
    sz = "alignas"s.find_first_of("klmn"s);
    //     └────────────────────────┘
    assert(sz == 1);
 
    sz = "alignof"s.find_first_of("wxyz"s);
    // no match
    assert(sz == std::string::npos);
 
    // (2)
    sz = "consteval"s.find_first_of("xyzabc", 0, 3);
    // no match (× are not targets)     ×××
    assert(sz == std::string::npos);
 
    sz = "consteval"s.find_first_of("xyzabc", 0, 6);
    //    └───────────────────────────────┘
    assert(sz == 0);
 
    // (3)
    sz = "decltype"s.find_first_of("xyzabc");
    //      └────────────────────────────┘
    assert(sz == 2);
 
    // (4)
    sz = "co_await"s.find_first_of('a');
    //       └──────────────────────┘
    assert(sz == 3);
 
    // (5)
    sz = "constinit"s.find_first_of("int"sv);
    //      └─────────────────────────┘
    assert(sz == 2);
 
    std::cout << "All tests passed.\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2064 | C++11 | overloads (3,4) were noexcept | removed |
| LWG 2946 | C++17 | overload (5) caused ambiguity in some cases | avoided by making it a template |
| P1148R0 | C++11C++17 | noexcept for overloads (4,5) wereaccidentally dropped by LWG2064/LWG2946 | restored |

## See also
- [find](/cpp/string/basic_string/find/)
- [rfind](/cpp/string/basic_string/rfind/)
- [find_first_not_of](/cpp/string/basic_string/find_first_not_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
- [find_first_of](/cpp/string/basic_string_view/find_first_of/)
- [strspn](/cpp/string/byte/strspn/)
