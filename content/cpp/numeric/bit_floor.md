---
title: "std::bit_floor"
source_path: "cpp/numeric/bit_floor"
header: "<bit>"
category: "numeric"
since: "C++20"
---

If x is not zero, calculates the largest integral power of two that is not greater than x. If x is zero, returns zero.

## Declarations
```cpp
template< class T >
constexpr T bit_floor( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: unsigned integer value

## Return value
Zero if x is zero; otherwise, the largest integral power of two that is not greater than x.

## Notes
Prior to [P1956R1](https://wg21.link/P1956R1), the proposed name for this function template was floor2.

## Example
```cpp
#include <bit>
#include <bitset>
#include <iostream>
 
int main()
{
    using bin = std::bitset<8>;
    for (unsigned x{}; x != 012; ++x)
        std::cout << "bit_floor( " << bin(x) << " ) = "
                  << bin(std::bit_floor(x)) << '\n';
}
```

## See also
- [bit_ceil](/cpp/numeric/bit_ceil/)
- [rotr](/cpp/numeric/rotr/)
- [bit_width](/cpp/numeric/bit_width/)
- [has_single_bit](/cpp/numeric/has_single_bit/)
