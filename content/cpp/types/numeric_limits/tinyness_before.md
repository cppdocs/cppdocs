---
title: "std::numeric_limits<T>::tinyness_before"
source_path: "cpp/types/numeric_limits/tinyness_before"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::tinyness_before is true for all floating-point types T that test results of floating-point expressions for underflow before rounding.

## Declarations
```cpp
static const bool tinyness_before;
```
_(until C++11)_

```cpp
static constexpr bool tinyness_before;
```
_(since C++11)_

## Notes
Standard-compliant IEEE 754 floating-point implementations are required to detect the floating-point underflow, and have two alternative situations where this can be done

## Example
```cpp
#include <iostream>
#include <limits>
#include <cmath>
#include <cfenv>
 
int main()
{
    std::cout << "Tinyness before: " << std::boolalpha
              << std::numeric_limits<double>::tinyness_before << '\n';
 
    double denorm_max = std::nextafter(std::numeric_limits<double>::min(), 0);
    double multiplier = 1 + std::numeric_limits<double>::epsilon();
 
    std::feclearexcept(FE_ALL_EXCEPT);
 
    double result = denorm_max * multiplier; // Underflow only if tinyness_before
 
    if (std::fetestexcept(FE_UNDERFLOW))
        std::cout << "Underflow detected\n";
 
    std::cout << std::hexfloat << denorm_max << " x " << multiplier  <<  " = "
              << result << '\n';
}
```

## See also
- [has_denorm_loss](/cpp/types/numeric_limits/has_denorm_loss/)
- [has_denorm](/cpp/types/numeric_limits/has_denorm/)
