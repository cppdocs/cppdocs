---
title: "std::ranges::stride_view<V>::iterator<Const>::operator[]"
source_path: "cpp/ranges/stride_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location.

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type n ) const
requires ranges::random_access_range<Base>
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto v = {'a', 'b', 'c', 'd', 'e'};
    constexpr auto view{v | std::views::stride(2)};
    constexpr auto iter{view.begin() + 1};
    static_assert(*iter == 'c');
    static_assert(iter[0] == 'c');
    static_assert(iter[1] == 'e');
}
```

## See also
- [operator*](/cpp/ranges/stride_view/iterator/operator/)
