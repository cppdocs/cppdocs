---
title: "std::greater<void>"
source_path: "cpp/utility/functional/greater_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::greater](/cpp/utility/functional/greater/)<void> is a specialization of [std::greater](/cpp/utility/functional/greater/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class greater<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) > [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <algorithm>
#include <cstdint>
#include <functional>
 
constexpr bool strictly_positive(int lhs)
{
    return std::greater<>()(lhs, 0);
}
 
int main()
{
    constexpr std::int64_t low = 0B11;
    constexpr std::uint16_t high = 0X11;
    std::greater<> greater{};
    static_assert(greater(high, low));
 
    constexpr static auto arr = {0, 1, 2, 3, 4, 5};
    static_assert(!std::all_of(arr.begin(), arr.end(), strictly_positive));
    static_assert(std::all_of(arr.begin() + 1, arr.end(), strictly_positive));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2562 | C++98 | the pointer total order might be inconsistent | guaranteed to be consistent |
