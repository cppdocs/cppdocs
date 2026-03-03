---
title: "std::numeric_limits<T>::min_exponent"
source_path: "cpp/types/numeric_limits/min_exponent"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::min_exponent is the lowest negative number n such that \(\scriptsize r^{n-1}\)rn-1, where r is [std::numeric_limits](/cpp/types/numeric_limits/)<T>::radix, is a valid normalized value of the floating-point type T.

## Declarations
```cpp
static const int min_exponent;
```
_(until C++11)_

```cpp
static constexpr int min_exponent;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <limits>
 
int main()
{
    std::cout << "min() = " << std::numeric_limits<float>::min() << '\n'
              << "min_exponent10 = " << std::numeric_limits<float>::min_exponent10 << '\n'
              << std::hexfloat << '\n'
              << "min() = " << std::numeric_limits<float>::min() << '\n'
              << "min_exponent = " << std::numeric_limits<float>::min_exponent << '\n';
}
```

## See also
- [radix](/cpp/types/numeric_limits/radix/)
- [min_exponent10](/cpp/types/numeric_limits/min_exponent10/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
- [max_exponent10](/cpp/types/numeric_limits/max_exponent10/)
