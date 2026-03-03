---
title: "std::ranges::drop_view<V>::drop_view"
source_path: "cpp/ranges/drop_view/drop_view"
category: "ranges"
since: "C++20"
---

Constructs a drop_view.

## Declarations
```cpp
drop_view() requires std::default_initializable<V> = default;
```
_(since C++20)_

```cpp
constexpr explicit drop_view( V base, ranges::range_difference_t<V> count );
```
_(since C++20)_

## Parameters
- `base`: the underlying view
- `count`: number of elements to skip

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    constexpr std::array hi{'H', 'e', 'l', 'l', 'o', ',',
                            ' ', 'C', '+', '+', '2', '0'};
 
    std::ranges::for_each(hi, [](const char c){ std::cout << c; });
    std::cout << '\n';
 
    constexpr auto n = std::distance(hi.cbegin(), std::ranges::find(hi, 'C'));
 
    auto cxx = std::ranges::drop_view{hi, n};
 
    std::ranges::for_each(cxx, [](const char c){ std::cout << c; });
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
