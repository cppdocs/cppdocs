---
title: "std::numeric_limits<T>::quiet_NaN"
source_path: "cpp/types/numeric_limits/quiet_NaN"
category: "types"
since: "C++11"
---

Returns the special value "quiet [not-a-number](https://en.wikipedia.org/wiki/NaN)", as represented by the floating-point type T. Only meaningful if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_quiet_NaN == true. In IEEE 754, the most common binary representation of floating-point numbers, any value with all bits of the exponent set and at least one bit of the fraction set represents a NaN. It is implementation-defined which values of the fraction represent quiet or signaling NaNs, and whether the sign bit is meaningful.

## Declarations
```cpp
static T quiet_NaN() throw();
```
_(until C++11)_

```cpp
static constexpr T quiet_NaN() noexcept;
```
_(since C++11)_

## Notes
A NaN never compares equal to itself. Copying a NaN may not preserve its bit representation.

## Example
```cpp
#include <iostream>
#include <limits>
#include <cmath>
 
int main()
{
    std::cout << std::numeric_limits<double>::quiet_NaN()     << ' ' // nan
              << std::numeric_limits<double>::signaling_NaN() << ' ' // nan
              << std::acos(2)    << ' '   // nan
              << std::tgamma(-1) << ' '   // nan
              << std::log(-1)    << ' '   // nan
              << std::sqrt(-1)   << ' '   // -nan
              << 0 / 0.0         << '\n'; // -nan
 
    std::cout << "NaN == NaN? " << std::boolalpha
              << ( std::numeric_limits<double>::quiet_NaN() ==
                   std::numeric_limits<double>::quiet_NaN() ) << '\n';
}
```

## See also
- [has_quiet_NaN](/cpp/types/numeric_limits/has_quiet_nan/)
- [signaling_NaN](/cpp/types/numeric_limits/signaling_nan/)
- [nannanfnanl](/cpp/numeric/math/nan/)
- [isnan](/cpp/numeric/math/isnan/)
