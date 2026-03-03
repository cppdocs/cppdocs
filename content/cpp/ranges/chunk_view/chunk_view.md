---
title: "std::ranges::chunk_view<V>::chunk_view"
source_path: "cpp/ranges/chunk_view/chunk_view"
category: "ranges"
since: "C++23"
---

Constructs a chunk_view, initializing the underlying data members:

## Declarations
```cpp
constexpr explicit chunk_view( V base, ranges::range_difference_t<V> n );
```
_(since C++23)_

## Parameters
- `base`: the adapted view
- `n`: the chunk size

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
int main()
{
    auto i = std::views::iota(0, 10);
    auto w = std::ranges::chunk_view(i, 4);
 
    std::ranges::for_each(w, [](auto const v)
    {
        for (auto e : v)
            std::cout << e << ' ';
        std::cout << '\n';
    });
}
```
