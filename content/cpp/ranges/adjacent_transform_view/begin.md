---
title: "std::ranges::adjacent_transform_view<V,F,N>::begin"
source_path: "cpp/ranges/adjacent_transform_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/adjacent_transform_view/iterator/) to the first element of the [adjacent_transform_view](/cpp/ranges/adjacent_transform_view/).

## Declarations
```cpp
constexpr auto begin();
```
_(since C++23)_

```cpp
constexpr auto begin() const
requires ranges::range<const InnerView> &&
std::regular_invocable<const F&,
/*REPEAT*/(ranges::range_reference_t<const V>, N)...>;
```
_(since C++23)_

## Return value
Iterator to the first element.

## Example
```cpp
#include <ranges>
 
int main()
{
    auto sum = [](auto... args) { return (... + args); };
 
    constexpr auto view = std::views::iota(13, 1337)
                        | std::views::adjacent_transform<3>(sum);
 
    static_assert(*view.begin() == 42 and 42 == 13 + 14 + 15);
}
```

## See also
- [end](/cpp/ranges/adjacent_transform_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
