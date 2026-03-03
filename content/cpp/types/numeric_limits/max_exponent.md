---
title: "std::numeric_limits<T>::max_exponent"
source_path: "cpp/types/numeric_limits/max_exponent"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::max_exponent is the largest positive number n such that \(\scriptsize r^{n-1}\)rn-1, where r is [std::numeric_limits](/cpp/types/numeric_limits/)<T>::radix, is a representable finite value of the floating-point type T.

## Declarations
```cpp
static const int max_exponent;
```
_(until C++11)_

```cpp
static constexpr int max_exponent;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <limits>
 
int main()
{
    std::cout << "max() = " << std::numeric_limits<float>::max() << '\n'
              << "max_exponent10 = " << std::numeric_limits<float>::max_exponent10 << '\n'
              << std::hexfloat << '\n'
              << "max() = " << std::numeric_limits<float>::max() << '\n'
              << "max_exponent = " << std::numeric_limits<float>::max_exponent << '\n';
}
```

## See also
- [min_exponent10](/cpp/types/numeric_limits/min_exponent10/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent10](/cpp/types/numeric_limits/max_exponent10/)
