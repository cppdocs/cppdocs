---
title: "std::has_single_bit"
source_path: "cpp/numeric/has_single_bit"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Checks if x is an integral power of two.

## Declarations
```cpp
template< class T >
constexpr bool has_single_bit( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
true if x is an integral power of two; otherwise false.

## Notes
Prior to [P1956R1](https://wg21.link/P1956R1), the proposed name for this function template was ispow2.

## Example
```cpp
#include <bit>
#include <bitset>
#include <cmath>
#include <iostream>
 
int main()
{
    for (auto u{0u}; u != 0B1010; ++u)
    {
        std::cout << "u = " << u << " = " << std::bitset<4>(u);
        if (std::has_single_bit(u))
            std::cout << " = 2^" << std::log2(u) << " (is power of two)";
        std::cout << '\n';
    }
}
```

## See also
- [popcount](/cpp/numeric/popcount/)
- [count](/cpp/utility/bitset/count/)
- [test](/cpp/utility/bitset/test/)
