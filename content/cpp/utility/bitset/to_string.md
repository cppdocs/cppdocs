---
title: "std::bitset<N>::to_string"
source_path: "cpp/utility/bitset/to_string"
category: "utility"
---

Converts the contents of the bitset to a string. Uses zero to represent bits with value of false and one to represent bits with value of true.

## Declarations
```cpp
template< class CharT, class Traits, class Allocator >
std::basic_string<CharT, Traits, Allocator>
to_string( CharT zero = CharT('0'),
CharT one = CharT('1') ) const;
```
_(until C++11)_

```cpp
template<
class CharT = char,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
>
std::basic_string<CharT, Traits, Allocator>
to_string( CharT zero = CharT('0'),
CharT one = CharT('1') ) const;
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class CharT, class Traits >
std::basic_string<CharT, Traits>
to_string( CharT zero = CharT('0'),
CharT one = CharT('1') ) const;
```
_(until C++11)_

```cpp
template< class CharT >
std::basic_string<CharT> to_string( CharT zero = CharT('0'),
CharT one = CharT('1') ) const;
```
_(until C++11)_

```cpp
std::string to_string( char zero = '0', char one = '1' ) const;
```
_(until C++11)_

## Parameters
- `zero`: character to use to represent false
- `one`: character to use to represent true

## Notes
Since C++11, functions templates can have default template arguments. [LWG issue 1113](https://cplusplus.github.io/LWG/issue1113) removed the helper overloads ([2-4](#Version_2)) and added the corresponding default template arguments in ([1](#Version_1)).

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<8> b{42};
    std::cout << b.to_string() << '\n'
              << b.to_string('*') << '\n'
              << b.to_string('O', 'X') << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 396 | C++98 | zero and one bits were converted to characters 0and 1 (which do not correspond to '0' and '1') | added parameters to providevalues for these characters |
| LWG 434 | C++98 | all template arguments needed to be provided | added overloads (2-4) |
| LWG 853 | C++98 | overloads (2-4) did not have the defaultarguments added by LWG issue 396 | also added |

## See also
- [to_ulong](/cpp/utility/bitset/to_ulong/)
- [to_ullong](/cpp/utility/bitset/to_ullong/)
