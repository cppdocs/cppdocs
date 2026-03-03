---
title: "std::less<void>"
source_path: "cpp/utility/functional/less_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::less](/cpp/utility/functional/less/)<void> is a specialization of [std::less](/cpp/utility/functional/less/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class less<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) < [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <algorithm>
#include <functional>
 
constexpr bool strictly_negative(int lhs)
{
    return std::less<>()(lhs, 0);
}
 
int main()
{
    constexpr signed low = 010;
    constexpr unsigned high = 10;
    std::less<> less{};
    static_assert(less(low, high));
 
    constexpr static auto arr = {0, -1, -2, -3, -4, -5};
    static_assert(!std::all_of(arr.begin(), arr.end(), strictly_negative));
    static_assert(std::all_of(arr.begin() + 1, arr.end(), strictly_negative));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2562 | C++98 | the pointer total order might be inconsistent | guaranteed to be consistent |
