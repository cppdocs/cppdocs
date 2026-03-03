---
title: "std::popcount"
source_path: "cpp/numeric/popcount"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Returns the number of 1 bits in the value of x.

## Declarations
```cpp
template< class T >
constexpr int popcount( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
The number of 1 bits in the value of x.

## Notes
The name popcount is a contraction for "population count".

## Example
```cpp
#include <bit>
#include <bitset>
#include <cstdint>
#include <iostream>
 
static_assert(std::popcount(0xFULL) == 4);
 
int main()
{
    for (const std::uint8_t x : {0, 0b00011101, 0b11111111})
        std::cout << "popcount( " << std::bitset<8>(x) << " ) = "
                  << std::popcount(x) << '\n';
}
```

## See also
- [countl_zero](/cpp/numeric/countl_zero/)
- [countl_one](/cpp/numeric/countl_one/)
- [countr_zero](/cpp/numeric/countr_zero/)
- [countr_one](/cpp/numeric/countr_one/)
- [has_single_bit](/cpp/numeric/has_single_bit/)
- [count](/cpp/utility/bitset/count/)
- [allanynone](/cpp/utility/bitset/all_any_none/)
