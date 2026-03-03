---
title: "std::ranges::adjacent_view<V,N>::size"
source_path: "cpp/ranges/adjacent_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++23)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++23)_

## Return value
The number of elements, may be 0 if [ranges::size](/cpp/ranges/size/)(base_) is less than N.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto v = {1, 2, 3, 4, 5, 6};
 
    constexpr int width1 {4};
    constexpr auto view1 {std::views::adjacent<width1>(v)};
    static_assert(view1.size() == 3);
    static_assert(view1.size() == (v.size() - width1 + 1));
 
    constexpr int width2 {8};
    constexpr auto view2 {std::views::adjacent<width2>(v)};
    // window is too wide, so view2 has no elements:
    static_assert(view2.size() == 0);
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
