---
title: "std::saturate_cast"
source_path: "cpp/numeric/saturate_cast"
header: "<numeric>"
category: "numeric"
since: "C++26"
---

Converts the value x to a value of type T, clamping x between the minimum and maximum values of type T.

## Declarations
```cpp
template< class T, class U >
constexpr T saturate_cast( U x ) noexcept;
```
_(since C++26)_

## Parameters
- `x`: an integer value

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_saturation_arithmetic
202311L
(C++26)
Saturation arithmetic

## Example
```cpp
#include <cstdint>
#include <limits>
#include <numeric>
 
int main()
{
    constexpr std::int16_t x1{696};
 
    constexpr std::int8_t x2 = std::saturate_cast<std::int8_t>(x1);
    static_assert(x2 == std::numeric_limits<std::int8_t>::max());
 
    constexpr std::uint8_t x3 = std::saturate_cast<std::uint8_t>(x1);
    static_assert(x3 == std::numeric_limits<std::uint8_t>::max());
 
    constexpr std::int16_t y1{-696};
 
    constexpr std::int8_t y2 = std::saturate_cast<std::int8_t>(y1);
    static_assert(y2 == std::numeric_limits<std::int8_t>::min());
 
    constexpr std::uint8_t y3 = std::saturate_cast<std::uint8_t>(y1);
    static_assert(y3 == 0);
}
```

## See also
- [bit_cast](/cpp/numeric/bit_cast/)
- [clamp](/cpp/algorithm/clamp/)
- [in_range](/cpp/utility/in_range/)
