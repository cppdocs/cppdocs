---
title: "std::numeric_limits<T>::is_integer"
source_path: "cpp/types/numeric_limits/is_integer"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_integer is true for all integer arithmetic types T and false otherwise. This constant is meaningful for all specializations.

## Declarations
```cpp
static const bool is_integer;
```
_(until C++11)_

```cpp
static constexpr bool is_integer;
```
_(since C++11)_

## Example
```cpp
#include <cstddef>
#include <cstdint>
#include <limits>
 
static_assert
(
        std::numeric_limits<bool>::is_integer
    &&  std::numeric_limits<std::size_t>::is_integer
    &&  std::numeric_limits<std::int32_t>::is_integer
    &&  std::numeric_limits<std::int64_t>::is_integer
    &&  std::numeric_limits<decltype(42)>::is_integer
    && !std::numeric_limits<int*>::is_integer
    && !std::numeric_limits<float>::is_integer
    && !std::numeric_limits<double>::is_integer
    && !std::numeric_limits<long double>::is_integer
    && !std::numeric_limits<decltype([](){})>::is_integer // P0315R4
);
 
int main() {}
```

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_signed](/cpp/types/numeric_limits/is_signed/)
- [is_exact](/cpp/types/numeric_limits/is_exact/)
- [is_bounded](/cpp/types/numeric_limits/is_bounded/)
