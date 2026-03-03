---
title: "std::bitset<N>::bitset"
source_path: "cpp/utility/bitset/bitset"
category: "utility"
since: "C++11"
---

Constructs a new bitset from one of several optional data sources:

## Declarations
```cpp
bitset();
```
_(noexcept since C++11) (constexpr since C++11)_

```cpp
bitset( unsigned long val );
```
_(until C++11)_

```cpp
constexpr bitset( unsigned long long val ) noexcept;
```
_(since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
explicit bitset
( const std::basic_string<CharT, Traits, Alloc>& str,
typename std::basic_string
<CharT, Traits, Alloc>::size_type pos = 0,
typename std::basic_string<CharT, Traits, Alloc>::size_type
n = std::basic_string<CharT, Traits, Alloc>::npos,
CharT zero = CharT('0'), CharT one = CharT('1') );
```
_(constexpr since C++23)_

```cpp
template< class CharT, class Traits >
constexpr explicit bitset
( std::basic_string_view<CharT, Traits> str,
std::size_t pos = 0, std::size_t n = std::size_t(-1),
CharT zero = CharT('0'), CharT one = CharT('1') );
```
_(since C++26)_

```cpp
template< class CharT >
explicit bitset( const CharT* str, std::size_t n = std::size_t(-1),
CharT zero = CharT('0'), CharT one = CharT('1') );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `val`: number used to initialize the bitset
- `str`: string used to initialize the bitset
- `pos`: a starting offset into str
- `n`: number of characters to use from str
- `zero`: alternate character for unset bits in str
- `one`: alternate character for set bits in str

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constexpr_bitset
202207L
(C++23)
A more constexpr std::bitset, overloads (3,5)
__cpp_lib_bitset
202306L
(C++26)
Interfacing std::bitset with std::string_view, (4)

## Example
```cpp
#include <bitset>
#include <climits>
#include <iostream>
#include <string>
 
int main()
{
    // empty constructor (1)
    std::bitset<8> b1; // [0,0,0,0,0,0,0,0]
 
    // unsigned long long constructor (2)
    std::bitset<8> b2(42);          // [0,0,1,0,1,0,1,0]
    std::bitset<70> bl(ULLONG_MAX); // [0,0,0,0,0,0,1,1,1,...,1,1,1] in C++11
    std::bitset<8> bs(0xfff0);      // [1,1,1,1,0,0,0,0]
 
    // string constructor (3)
    std::string bit_string = "110010";
    std::bitset<8> b3(bit_string);       // [0,0,1,1,0,0,1,0]
    std::bitset<8> b4(bit_string, 2);    // [0,0,0,0,0,0,1,0]
    std::bitset<8> b5(bit_string, 2, 3); // [0,0,0,0,0,0,0,1]
 
    // string constructor using custom zero/one digits (3)
    std::string alpha_bit_string = "aBaaBBaB";
    std::bitset<8> b6(alpha_bit_string, 0, alpha_bit_string.size(),
                      'a', 'B');         // [0,1,0,0,1,1,0,1]
 
    // char* constructor using custom digits (5)
    std::bitset<8> b7("XXXXYYYY", 8, 'X', 'Y'); // [0,0,0,0,1,1,1,1]
 
    std::cout <<   "b1: " << b1 << "\nb2: " << b2 << "\nbl: " << bl
              << "\nbs: " << bs << "\nb3: " << b3 << "\nb4: " << b4
              << "\nb5: " << b5 << "\nb6: " << b6 << "\nb7: " << b7 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 396 | C++98 | the values of the zero and one characters for overload (3)were 0 and 1 (which do not correspond to '0' and '1') | added parameters to providevalues for these characters |
| LWG 457 | C++98 | S was CHAR_BIT * sizeof(unsigned long)for overload (2), but unsigned long is notguaranteed to use all its bits to represent its value | consider the numberof bits of the valuerepresentation instead |
| LWG 2250 | C++98 | the behavior was undefined if pos > str.size() is true | always throws anexception in this case |

## See also
- [set](/cpp/utility/bitset/set/)
- [reset](/cpp/utility/bitset/reset/)
