---
title: "std::negate<void>"
source_path: "cpp/utility/functional/negate_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::negate](/cpp/utility/functional/negate/)<> is a specialization of [std::negate](/cpp/utility/functional/negate/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class negate<void>;
```
_(since C++14)_

## Parameters
- `arg`: value to negate

## Return value
-[std::forward](/cpp/utility/forward/)<T>(arg).

## Example
```cpp
#include <complex>
#include <functional>
#include <iostream>
 
int main()
{
    auto complex_negate = std::negate<void>{}; // “void” can be omitted
    constexpr std::complex z(4, 2);
    std::cout << z << '\n';
    std::cout << -z << '\n';
    std::cout << complex_negate(z) << '\n';
}
```
