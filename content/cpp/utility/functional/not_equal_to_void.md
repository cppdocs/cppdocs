---
title: "std::not_equal_to<void>"
source_path: "cpp/utility/functional/not_equal_to_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::not_equal_to](/cpp/utility/functional/not_equal_to/)<void> is a specialization of [std::not_equal_to](/cpp/utility/functional/not_equal_to/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class not_equal_to<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) != [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <functional>
 
int main()
{
    constexpr int p = 0, q = 8;
    std::not_equal_to<> not_equal{};
    static_assert(!not_equal(p, p));
    static_assert(not_equal(p, q));
}
```
