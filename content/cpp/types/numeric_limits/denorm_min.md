---
title: "std::numeric_limits<T>::denorm_min"
source_path: "cpp/types/numeric_limits/denorm_min"
category: "types"
since: "C++11"
---

Returns the minimum positive [subnormal value](https://en.wikipedia.org/wiki/Denormal_number) of the type T, if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_denorm != [std::denorm_absent](/cpp/types/numeric_limits/float_denorm_style/), otherwise returns [std::numeric_limits](/cpp/types/numeric_limits/)<T>::min() for floating point types and T() for all other types. Only meaningful for floating-point types.

## Declarations
```cpp
static T denorm_min() throw();
```
_(until C++11)_

```cpp
static constexpr T denorm_min() noexcept;
```
_(since C++11)_

## Example
```cpp
#include <cassert>
#include <cstdint>
#include <cstring>
#include <iostream>
#include <limits>
 
int main()
{
    // the smallest subnormal value has sign bit = 0, exponent = 0
    // and only the least significant bit of the fraction is 1
    std::uint32_t denorm_bits = 0x0001;
    float denorm_float;
    std::memcpy(&denorm_float, &denorm_bits, sizeof(float));
 
    assert(denorm_float == std::numeric_limits<float>::denorm_min());
 
    std::cout << "float\tmin()\t\tdenorm_min()\n";
    std::cout << "\t" << std::numeric_limits<float>::min() << '\t';
    std::cout <<         std::numeric_limits<float>::denorm_min() << '\n';
 
    std::cout << "double\tmin()\t\tdenorm_min()\n";
    std::cout << "\t" << std::numeric_limits<double>::min() << '\t';
    std::cout <<         std::numeric_limits<double>::denorm_min() << '\n';
}
```

## See also
- [min](/cpp/types/numeric_limits/min/)
- [has_denorm](/cpp/types/numeric_limits/has_denorm/)
- [lowest](/cpp/types/numeric_limits/lowest/)
