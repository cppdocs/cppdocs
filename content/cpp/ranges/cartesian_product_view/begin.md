---
title: "std::ranges::cartesian_product_view<First, Vs...>::begin"
source_path: "cpp/ranges/cartesian_product_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/cartesian_product_view/iterator/) to the first element of the [cartesian_product_view](/cpp/ranges/cartesian_product_view/).

## Declarations
```cpp
constexpr iterator<false> begin()
requires (!/*simple-view*/<First> || ... || !/*simple-view*/<Vs>);
```
_(since C++23)_

```cpp
constexpr iterator<true> begin() const
requires (ranges::range<const First> && ... && ranges::range<const Vs>);
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/cartesian_product_view/iterator/) to the first element.

## Example
```cpp
#include <array>
#include <format>
#include <iostream>
#include <ranges>
#include <string_view>
#include <tuple>
using namespace std::literals;
 
int main()
{
    constexpr auto a = std::array{"Curiously"sv, "Recurring"sv, "Template"sv, "Pattern"sv};
 
    constexpr auto v = std::ranges::cartesian_product_view(a[0], a[1], a[2], a[3]);
 
    constexpr std::tuple<char const&,
                         char const&,
                         char const&,
                         char const&> first{*v.begin()};
 
    std::cout << std::format("{}{}{}{}{}",
                             std::get<0>(first),
                             std::get<1>(first),
                             std::get<2>(first),
                             std::get<3>(first),
                             '\n');
}
```

## See also
- [end](/cpp/ranges/cartesian_product_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
