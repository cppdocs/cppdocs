---
title: "std::countr_zero"
source_path: "cpp/numeric/countr_zero"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Returns the number of consecutive 0 bits in the value of x, starting from the least significant bit ("right").

## Declarations
```cpp
template< class T >
constexpr int countr_zero( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: value of unsigned integer type

## Return value
The number of consecutive 0 bits in the value of x, starting from the least significant bit.

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
    for (const std::uint8_t i : {0, 0b11111111, 0b00011100, 0b00011101})
        std::cout << "countr_zero( " << std::bitset<8>(i) << " ) = "
                  << std::countr_zero(i) << '\n';
}
```

## See also
- [countl_zero](/cpp/numeric/countl_zero/)
- [countl_one](/cpp/numeric/countl_one/)
- [countr_one](/cpp/numeric/countr_one/)
- [popcount](/cpp/numeric/popcount/)
- [allanynone](/cpp/utility/bitset/all_any_none/)
