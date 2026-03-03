---
title: "std::ranges::adjacent_transform_view<V,F,N>::adjacent_transform_view"
source_path: "cpp/ranges/adjacent_transform_view/adjacent_transform_view"
category: "ranges"
since: "C++23"
---

Constructs an [adjacent_transform_view](/cpp/ranges/adjacent_transform_view/).

## Declarations
```cpp
adjacent_transform_view() = default;
```
_(since C++23)_

```cpp
constexpr explicit adjacent_transform_view( V base, F fun );
```
_(since C++23)_

## Parameters
- `base`: the underlying view
- `fun`: the N-ary transformation function

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    constexpr static auto v = {1, 2, 3, 4, 5};
    constexpr auto mul = [](auto... x) { return (... * x); };
    constexpr auto view = std::views::adjacent_transform<3>(v, mul);
    std::ranges::copy(view, std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```
