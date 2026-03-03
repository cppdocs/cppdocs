---
title: "operator<<,>>(std::bitset)"
source_path: "cpp/utility/bitset/operator"
header: "<bitset>"
category: "utility"
---

Inserts or extracts a bitset from a character stream.

## Declarations
```cpp
template< class CharT, class Traits, std::size_t N >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::bitset<N>& x );
```

```cpp
template< class CharT, class Traits, std::size_t N >
std::basic_istream<CharT, Traits>&
operator>>( std::basic_istream<CharT, Traits>& is, std::bitset<N>& x );
```

## Parameters
- `os`: the character stream to write to
- `is`: the character stream to read from
- `x`: the bitset to be read or written

## Example
```cpp
#include <bitset>
#include <iostream>
#include <sstream>
 
int main()
{
    std::string bit_string = "001101";
    std::istringstream bit_stream(bit_string);
 
    std::bitset<3> b1;
    bit_stream >> b1; // reads "001", stream still holds "101"
    std::cout << b1 << '\n';
 
    std::bitset<8> b2;
    bit_stream >> b2; // reads "101", populates the 8-bit set as "00000101"
    std::cout << b2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 303 | C++98 | single-byte characters were extracted fromis, but CharT can have multiple bytes | extracts CharT and comparesit with widened '0' and '1' |
| LWG 396 | C++98 | the content written by operator<< was locale-independent | writes widened '0's and '1's |
| LWG 3199 | C++98 | extracting a std::bitset<0> always sets failbit | such extraction never sets failbit |

## See also
- [operator<<=operator>>=operator<<operator>>](/cpp/utility/bitset/operator_ltltgtgt/)
