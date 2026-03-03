---
title: "std::countl_one"
source_path: "cpp/numeric/countl_one"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Returns the number of consecutive 1 ("one") bits in the value of x, starting from the most significant bit ("left").

## Declarations
```cpp
template< class T >
constexpr int countl_one( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
The number of consecutive 1 bits in the value of x, starting from the most significant bit.

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
    for (const std::uint8_t i : {0, 0b11111111, 0b01111111, 0b11100011})
        std::cout << "countl_one( " << std::bitset<8>(i) << " ) = "
                  << std::countl_one(i) << '\n';
}
```

## See also
- [countl_zero](/cpp/numeric/countl_zero/)
- [countr_zero](/cpp/numeric/countr_zero/)
- [countr_one](/cpp/numeric/countr_one/)
- [popcount](/cpp/numeric/popcount/)
- [has_single_bit](/cpp/numeric/has_single_bit/)
- [count](/cpp/utility/bitset/count/)
- [allanynone](/cpp/utility/bitset/all_any_none/)
