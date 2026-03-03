---
title: "std::less_equal<void>"
source_path: "cpp/utility/functional/less_equal_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::less_equal](/cpp/utility/functional/less_equal/)<void> is a specialization of [std::less_equal](/cpp/utility/functional/less_equal/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class less_equal<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) <= [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <algorithm>
#include <functional>
#include <initializer_list>
 
constexpr bool strictly_not_positive(int lhs)
{
    return std::less_equal<>()(lhs, 0);
}
 
int main()
{
    constexpr int low = 0, high = 8;
    std::less_equal<> less_equal{};
    static_assert(less_equal(low, high));
    static_assert(less_equal(low, low));
 
    static constexpr auto arr = {1, 0, -1, -2, -3, -4};
    static_assert(!std::all_of(arr.begin(), arr.end(), strictly_not_positive));
    static_assert(std::all_of(arr.begin() + 1, arr.end(), strictly_not_positive));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2562 | C++98 | the pointer total order might be inconsistent | guaranteed to be consistent |
