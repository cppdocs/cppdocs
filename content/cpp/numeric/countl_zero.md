---
title: "std::countl_zero"
source_path: "cpp/numeric/countl_zero"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Returns the number of consecutive 0 bits in the value of x, starting from the most significant bit ("left").

## Declarations
```cpp
template< class T >
constexpr int countl_zero( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
The number of consecutive 0 bits in the value of x, starting from the most significant bit.

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
    for (const std::uint8_t i : {0, 0b11111111, 0b11110000, 0b00011110})
        std::cout << "countl_zero( " << std::bitset<8>(i) << " ) = "
                  << std::countl_zero(i) << '\n';
}
```

## See also
- [countl_one](/cpp/numeric/countl_one/)
- [countr_zero](/cpp/numeric/countr_zero/)
- [countr_one](/cpp/numeric/countr_one/)
- [popcount](/cpp/numeric/popcount/)
- [allanynone](/cpp/utility/bitset/all_any_none/)
- [C documentation](/c/numeric/bit/stdc_leading_zeros/)
