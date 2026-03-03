---
title: "std::plus<void>"
source_path: "cpp/utility/functional/plus_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::plus](/cpp/utility/functional/plus/)<void> is a specialization of [std::plus](/cpp/utility/functional/plus/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class plus<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to sum

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) + [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <functional>
#include <iostream>
 
int main()
{
    auto string_plus = std::plus<void>{}; // “void” can be omitted
    std::string a = "Hello ";
    const char* b = "world";
    std::cout << string_plus(a, b) << '\n';
}
```
