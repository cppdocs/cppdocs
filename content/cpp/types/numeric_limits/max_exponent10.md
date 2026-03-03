---
title: "std::numeric_limits<T>::max_exponent10"
source_path: "cpp/types/numeric_limits/max_exponent10"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::max_exponent10 is the largest positive number n such that \(\scriptsize 10^n\)10n is a representable finite value of the floating-point type T.

## Declarations
```cpp
static const int max_exponent10;
```
_(until C++11)_

```cpp
static constexpr int max_exponent10;
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
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [min_exponent10](/cpp/types/numeric_limits/min_exponent10/)
