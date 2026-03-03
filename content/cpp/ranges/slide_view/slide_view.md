---
title: "std::ranges::slide_view<V>::slide_view"
source_path: "cpp/ranges/slide_view/slide_view"
category: "ranges"
since: "C++23"
---

Constructs a slide_view initializing the underlying data members:

## Declarations
```cpp
constexpr explicit slide_view( V base, ranges::range_difference_t<V> n );
```
_(since C++23)_

## Parameters
- `base`: the source view
- `n`: the "sliding window" size

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
int main()
{
    const auto source = {1, 2, 3, 4};
 
    auto slide = std::views::slide(source, 3);
 
    std::ranges::for_each(slide, [](std::ranges::viewable_range auto&& w)
    {
        std::cout << '[' << w[0] << ' ' << w[1] << ' ' << w[2] << "]\n";
    });
}
```
