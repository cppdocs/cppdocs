---
title: "std::numeric_limits<T>::min_exponent10"
source_path: "cpp/types/numeric_limits/min_exponent10"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::min_exponent10 is the lowest negative number n such that \(\scriptsize 10^n\)10n is a valid normalized value of the floating-point type T.

## Declarations
```cpp
static const int min_exponent10;
```
_(until C++11)_

```cpp
static constexpr int min_exponent10;
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
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
- [max_exponent10](/cpp/types/numeric_limits/max_exponent10/)
