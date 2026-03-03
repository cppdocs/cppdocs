---
title: "std::conditional"
source_path: "cpp/types/conditional"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Provides member typedef type, which is defined as T if B is true at compile time, or as F if B is false.

## Declarations
```cpp
template< bool B, class T, class F >
struct conditional;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
#include <typeinfo>
 
int main() 
{
    using Type1 = std::conditional<true, int, double>::type;
    using Type2 = std::conditional<false, int, double>::type;
    using Type3 = std::conditional<sizeof(int) >= sizeof(double), int, double>::type;
 
    std::cout << typeid(Type1).name() << '\n';
    std::cout << typeid(Type2).name() << '\n';
    std::cout << typeid(Type3).name() << '\n';
}
```

## See also
- [enable_if](/cpp/types/enable_if/)
- [removes](/cpp/language/sfinae/)
