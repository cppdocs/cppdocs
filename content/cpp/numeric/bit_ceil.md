---
title: "std::bit_ceil"
source_path: "cpp/numeric/bit_ceil"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Calculates the smallest integral power of two that is not smaller than x.

## Declarations
```cpp
template< class T >
constexpr T bit_ceil( T x );
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
The smallest integral power of two that is not smaller than x.

## Notes
Prior to [P1956R1](https://wg21.link/P1956R1), the proposed name for this function template was ceil2.

## Example
```cpp
#include <bit>
#include <bitset>
#include <iostream>
 
int main()
{
    using bin = std::bitset<8>;
    for (auto x{0U}; 0XA != x; ++x)
        std::cout << "bit_ceil( " << bin(x) << " ) = "
                  << bin(std::bit_ceil(x)) << '\n';
}
```

## See also
- [bit_floor](/cpp/numeric/bit_floor/)
