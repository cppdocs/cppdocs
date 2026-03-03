---
title: "std::ranges::adjacent_view<V,N>::iterator<Const>::operator*"
source_path: "cpp/ranges/adjacent_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Returns the elements into V the underlying array of iterators points to.

## Declarations
```cpp
constexpr auto operator*() const;
```
_(since C++23)_

## Return value
The current element, which is a [std::tuple](/cpp/utility/tuple/) of references to underlying elements.

## Notes
operator-> is not provided.

## Example
```cpp
#include <ranges>
#include <tuple>
 
int main()
{
    constexpr static auto v = {0, 1, 2, 3, 4, 5};
    //                               └──┬──┘
    //                                  └─────────────────┐
    constexpr auto view {v | std::views::adjacent<3>}; // │
    constexpr auto iter {view.begin() + 2};            // │
    //              ┌────────────────────┬────────────────┘
    //              │                 ┌──┴──┐
    static_assert(*iter == std::tuple{2, 3, 4});
}
```

## See also
- [operator[]](/cpp/ranges/adjacent_view/iterator/operator_at/)
