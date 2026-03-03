---
title: "std::multiplies<void>"
source_path: "cpp/utility/functional/multiplies_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::multiplies](/cpp/utility/functional/multiplies/)<void> is a specialization of [std::multiplies](/cpp/utility/functional/multiplies/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class multiplies<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to multiply

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) * [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <complex>
#include <functional>
#include <iostream>
 
int main()
{
    auto complex_multiplies = std::multiplies<void>{}; // “void” can be omitted
    constexpr std::complex z1{1.0, 2.0}, z2{3.0, 4.0};
 
    std::cout << std::showpos
              << complex_multiplies(z1, z2) << ' ' << z1 * z2 << '\n'
              << complex_multiplies(z1, 5.) << ' ' << z1 * 5. << '\n'
              << complex_multiplies(5., z1) << ' ' << 5. * z1 << '\n';
}
```
