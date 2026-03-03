---
title: "std::numeric_limits<T>::has_infinity"
source_path: "cpp/types/numeric_limits/has_infinity"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_infinity is true for all types T capable of representing the positive infinity as a distinct special value. This constant is meaningful for all floating-point types and is guaranteed to be true if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_iec559 == true.

## Declarations
```cpp
static const bool has_infinity;
```
_(until C++11)_

```cpp
static constexpr bool has_infinity;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <limits>
 
int main()
{
    std::cout << std::boolalpha
              << std::numeric_limits<int>::has_infinity << '\n'
              << std::numeric_limits<long>::has_infinity << '\n'
              << std::numeric_limits<float>::has_infinity << '\n'
              << std::numeric_limits<double>::has_infinity << '\n';
}
```

## See also
- [infinity](/cpp/types/numeric_limits/infinity/)
- [has_quiet_NaN](/cpp/types/numeric_limits/has_quiet_nan/)
- [has_signaling_NaN](/cpp/types/numeric_limits/has_signaling_nan/)
