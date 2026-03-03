---
title: "std::minus<void>"
source_path: "cpp/utility/functional/minus_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::minus](/cpp/utility/functional/minus/)<void> is a specialization of [std::minus](/cpp/utility/functional/minus/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class minus<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to subtract

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) - [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <complex>
#include <functional>
#include <iostream>
 
int main()
{
    auto complex_minus = std::minus<void>{}; // “void” can be omitted
    constexpr std::complex<int> z(4, 2);
    std::cout << complex_minus(z, 1) << '\n';
    std::cout << (z - 1) << '\n';
}
```
