---
title: "std::ranges::elements_view<V,F>::iterator<Const>::operator[]"
source_path: "cpp/ranges/elements_view/iterator/operator_at"
category: "ranges"
since: "C++20"
---

Returns an element at specified relative location, as if by /*get-element*/(this->base() + n), where for an expression e, /*get-element*/(e) is

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type n ) const
requires ranges::random_access_range<Base>;
```
_(since C++20)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
#include <tuple>
 
int main()
{
    using T = std::tuple<int, char, std::string_view>;
 
    const auto il =
    {
        T{1, 'A', "α"},
        T{2, 'B', "β"},
        T{3, 'C', "γ"},
    };
 
    std::cout << std::views::elements<0>(il)[1] << ' '   // 2
              << std::views::elements<1>(il)[1] << ' '   // B
              << std::views::elements<2>(il)[1] << '\n'; // β
}
```

## See also
- [operator*](/cpp/ranges/elements_view/iterator/operator/)
