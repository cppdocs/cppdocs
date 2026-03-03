---
title: "std::numeric_limits<T>::is_specialized"
source_path: "cpp/types/numeric_limits/is_specialized"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_specialized is true for all T for which there exists a specialization of [std::numeric_limits](/cpp/types/numeric_limits/).

## Declarations
```cpp
static const bool is_specialized;
```
_(until C++11)_

```cpp
static constexpr bool is_specialized;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <limits>
#include <type_traits>
 
int main()
{
    enum E{};
 
    std::cout << std::boolalpha
              << std::numeric_limits<bool>::is_specialized << '\n'
              << std::numeric_limits<long long>::is_specialized << '\n'
              << std::numeric_limits<std::true_type>::is_specialized << '\n'
              << std::numeric_limits<E>::is_specialized << '\n';
}
```

## See also
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_iec559](/cpp/types/numeric_limits/is_iec559/)
- [is_exact](/cpp/types/numeric_limits/is_exact/)
- [is_bounded](/cpp/types/numeric_limits/is_bounded/)
