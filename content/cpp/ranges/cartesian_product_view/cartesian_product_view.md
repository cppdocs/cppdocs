---
title: "std::ranges::cartesian_product_view<First, Vs...>::cartesian_product_view"
source_path: "cpp/ranges/cartesian_product_view/cartesian_product_view"
category: "ranges"
since: "C++23"
---

Constructs an [cartesian_product_view](/cpp/ranges/cartesian_product_view/).

## Declarations
```cpp
constexpr cartesian_product_view() = default;
```
_(since C++23)_

```cpp
constexpr explicit cartesian_product_view( First first_base, Vs... bases );
```
_(since C++23)_

## Parameters
- `first_base`: the first view object to adapt
- `bases`: the pack of views objects to adapt

## Example
```cpp
#include <array>
#include <format>
#include <iostream>
#include <ranges>
#include <vector>
 
int main()
{
    auto x = std::array{'A', 'B'};
    auto y = std::vector{1, 2, 3};
    auto z = std::vector{-1, -2, -3};
 
    auto v = std::ranges::cartesian_product_view(x, y, z); // overload (2)
 
    for (int i{1}; auto const& [rx, ry, rz] : v)
        std::cout << std::format("({} {} {}){}", rx, ry, rz, (i++ % 3) ? ' ' : '\n');
}
```
