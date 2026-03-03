---
title: "std::bit_width"
source_path: "cpp/numeric/bit_width"
header: "<bit>"
category: "numeric"
since: "C++20"
---

If x is not zero, calculates the number of bits needed to store the value x, that is, \(1 + \lfloor \log_2(x) \rfloor\)1 + floor(log2(x)). If x is zero, returns zero.

## Declarations
```cpp
template< class T >
constexpr int bit_width( T x ) noexcept;
```
_(since C++20)_

## Parameters
- `x`: unsigned integer value

## Return value
Zero if x is zero; otherwise, one plus the base-2 logarithm of x, with any fractional part discarded.

## Notes
This function is equivalent to return [std::numeric_limits](/cpp/types/numeric_limits/)<T>::digits - [std::countl_zero](/cpp/numeric/countl_zero/)(x);.

## Example
```cpp
#include <bit>
#include <bitset>
#include <iostream>
 
int main()
{
    for (unsigned x{}; x != 010; ++x)
        std::cout << "bit_width( "
                  << std::bitset<4>{x} << " ) = "
                  << std::bit_width(x) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3656 | C++20 | the return type of bit_width is the same as the type of its function argument | made it int |

## See also
- [countl_zero](/cpp/numeric/countl_zero/)
