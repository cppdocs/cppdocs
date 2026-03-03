---
title: "std::rotr"
source_path: "cpp/numeric/rotr"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Computes the result of bitwise right-rotating the value of x by s positions. This operation is also known as a right [circular shift](https://en.wikipedia.org/wiki/Circular_shift).

## Declarations
```cpp
template< class T >
constexpr T rotr( T x, int s ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type
- `s`: number of positions to shift

## Return value
The result of bitwise right-rotating x by s positions.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_bitops
201907L
(C++20)
Bit operations

## Example
```cpp
#include <bit>
#include <bitset>
#include <cstdint>
#include <iostream>
 
int main()
{
    using bin = std::bitset<8>;
    const std::uint8_t x{0b00011101};
    std::cout << bin(x) << " <- x\n";
    for (const int s : {0, 1, 9, -1, 2})
        std::cout << bin(std::rotr(x, s)) << " <- rotr(x, " << s << ")\n";
}
```

## See also
- [rotl](/cpp/numeric/rotl/)
- [operator<<=operator>>=operator<<operator>>](/cpp/utility/bitset/operator_ltltgtgt/)
