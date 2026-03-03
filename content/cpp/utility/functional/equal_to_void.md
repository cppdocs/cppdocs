---
title: "std::equal_to<void>"
source_path: "cpp/utility/functional/equal_to_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::equal_to](/cpp/utility/functional/equal_to/)<void> is a specialization of [std::equal_to](/cpp/utility/functional/equal_to/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class equal_to<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) == [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <functional>
 
int main()
{
    constexpr int a = 0, b = 8;
    std::equal_to<> equal{};
    static_assert(equal(a, a));
    static_assert(!equal(a, b));
}
```
