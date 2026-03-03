---
title: "std::ranges::stride_view<V>::begin"
source_path: "cpp/ranges/stride_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/stride_view/iterator/) to the first element of the stride_view.

## Declarations
```cpp
constexpr auto begin() requires (!__simple_view<V>);
```
_(since C++23)_

```cpp
constexpr auto begin() const requires ranges::range<const V>;
```
_(since C++23)_

## Return value
to the first element of the view.

## Example
```cpp
#include <print>
#include <ranges>
 
int main()
{
    constexpr auto v = {'A', 'B', 'C'};
    const auto x = v | std::views::stride(2);
    const auto y = v | std::views::reverse | std::views::stride(2);
    const auto z = v | std::views::stride(2) | std::views::reverse;
    std::println("{} {} {}", *x.begin(), *y.begin(), *z.begin());
}
```

## See also
- [end](/cpp/ranges/stride_view/end/)
