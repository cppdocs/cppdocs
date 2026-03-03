---
title: "std::numeric_limits<T>::infinity"
source_path: "cpp/types/numeric_limits/infinity"
category: "types"
since: "C++11"
---

Returns the special value "positive infinity", as represented by the floating-point type T. Only meaningful if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_infinity == true. In IEEE 754, the most common binary representation of floating-point numbers, the positive infinity is the value with all bits of the exponent set and all bits of the fraction cleared.

## Declarations
```cpp
static T infinity() throw();
```
_(until C++11)_

```cpp
static constexpr T infinity() noexcept;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <limits>
 
int main()
{
    double max = std::numeric_limits<double>::max();
    double inf = std::numeric_limits<double>::infinity();
 
    if (inf > max)
        std::cout << inf << " is greater than " << max << '\n';
}
```

## See also
- [has_infinity](/cpp/types/numeric_limits/has_infinity/)
