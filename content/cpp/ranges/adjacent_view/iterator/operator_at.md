---
title: "std::ranges::adjacent_view<V,N>::iterator<Const>::operator[]"
source_path: "cpp/ranges/adjacent_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location.

## Declarations
```cpp
constexpr auto operator[]( difference_type n ) const
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
```cpp
#include <ranges>
#include <tuple>
 
int main()
{
    constexpr static auto v = {0, 1, 2, 3, 4, 5};
    //                               └──┬──┘  
    //                                  └─────────────────┐
    constexpr auto view = v | std::views::adjacent<3>; // │
    //                 ┌───────────────────┬──────────────┘ 
    //                 │                ┌──┴──┐
    static_assert(view[2] == std::tuple{2, 3, 4});
}
```
