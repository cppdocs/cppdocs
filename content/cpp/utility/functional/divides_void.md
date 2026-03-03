---
title: "std::divides<void>"
source_path: "cpp/utility/functional/divides_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::divides](/cpp/utility/functional/divides/)<void> is a specialization of [std::divides](/cpp/utility/functional/divides/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class divides<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to divide

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) / [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <complex>
#include <functional>
#include <iostream>
 
int main()
{
    auto complex_divides = std::divides<void>{}; // “void” can be omitted
    constexpr std::complex z1{8.0, 4.0}, z2{1.0, 2.0};
 
    std::cout << std::showpos
              << complex_divides(z1, z2) << ' ' << z1 / z2 << '\n'
              << complex_divides(z1, 5.) << ' ' << z1 / 5. << '\n'
              << complex_divides(6., z2) << ' ' << 6. / z2 << '\n';
}
```
