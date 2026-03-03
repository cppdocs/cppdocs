---
title: "std::ranges::zip_transform_view<F,Views...>::size"
source_path: "cpp/ranges/zip_transform_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements in the zip_transform_view. Provided only if each underlying (adapted) range satisfies [sized_range](/cpp/ranges/sized_range/).

## Declarations
```cpp
constexpr auto size()
requires ranges::sized_range</*InnerView*/>;
```
_(since C++23)_

```cpp
constexpr auto size() const
requires ranges::sized_range<const /*InnerView*/>
```
_(since C++23)_

## Return value
The number of elements, which is the minimum size among all sizes of adapted [views](/cpp/ranges/view/).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <deque>
#include <forward_list>
#include <functional>
#include <iostream>
#include <ranges>
#include <vector>
 
int main()
{
    auto x = std::vector{1, 2, 3, 4, 5};
    auto y = std::deque<short>{10, 20, 30};
    auto z = std::forward_list{100., 200.};
 
    auto v1 = std::views::zip_transform(std::plus{}, x, y);
    assert(v1.size() == std::min(x.size(), y.size()));
    assert(v1.size() == 3);
    for (int i : v1)
        std::cout << i << ' ';
    std::cout << '\n';
 
    [[maybe_unused]] auto v2 = std::views::zip_transform(std::plus{}, x, z);
//  auto sz = v2.size(); // Error: z doesn't have size(), so neither does v2
    static_assert(not std::ranges::sized_range<decltype(z)>);
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
