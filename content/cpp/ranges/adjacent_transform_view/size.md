---
title: "std::ranges::adjacent_transform_view<V,F,N>::size"
source_path: "cpp/ranges/adjacent_transform_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<InnerView>;
```
_(since C++23)_

```cpp
constexpr auto size() const requires ranges::sized_range<const InnerView>;
```
_(since C++23)_

## Return value
The number of elements, may be 0 if the size of the underlying view V is less than N.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto v = {1, 2, 3, 4, 5, 6};
 
    auto f = [](auto...) { return 0; }; // dummy
 
    constexpr int width1 {4};
    constexpr auto view1 = v | std::views::adjacent_transform<width1>(f);
    static_assert(view1.size() == 3);
    static_assert(view1.size() == (v.size() - width1 + 1));
 
    constexpr int width2 {8};
    constexpr auto view2 = v | std::views::adjacent_transform<width2>(f);
    // window is too wide, so view2 has no elements:
    static_assert(view2.size() == 0);
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
