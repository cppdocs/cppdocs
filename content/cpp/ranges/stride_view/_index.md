---
title: "std::ranges::views::stride, std::ranges::stride_view"
source_path: "cpp/ranges/stride_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) stride_view is a range adaptor that takes a [view](/cpp/ranges/view/) and a number n and produces a view, that consists of elements of the original view by advancing over n elements at a time. This means that each mth element of the produced view is (n * i)th element of the original view, for some non-negative index i.
The elements of the original view, whose "index" is not a multiple of n, are not present in the produced view.

## Declarations
```cpp
template< ranges::input_range V >
requires ranges::view<V>
class stride_view
: public ranges::view_interface<stride_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ stride = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
constexpr ranges::view auto stride( R&& r, ranges::range_difference_t<R> n );
```
_(since C++23)_

```cpp
template< class DifferenceType >
constexpr /*range adaptor closure*/ stride( DifferenceType&& n );
```
_(since C++23)_

```cpp
Helper templates
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_stride
202207L
(C++23)
std::ranges::stride_view

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string_view>
using namespace std::literals;
 
void print(std::ranges::viewable_range auto&& v, std::string_view separator = " ")
{
    for (auto const& x : v)
        std::cout << x << separator;
    std::cout << '\n';
}
 
int main()
{
    print(std::views::iota(1, 13) | std::views::stride(3));
    print(std::views::iota(1, 13) | std::views::stride(3) | std::views::reverse);
    print(std::views::iota(1, 13) | std::views::reverse | std::views::stride(3));
 
    print("0x0!133713337*x//42/A$@"sv | std::views::stride(0B11) |
          std::views::transform([](char O) -> char { return 0100 | O; }),
          "");
}
```

## See also
- [ranges::slide_viewviews::slide](/cpp/ranges/slide_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::chunk_viewviews::chunk](/cpp/ranges/chunk_view/)
- [views](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::adjacent_viewviews::adjacent](/cpp/ranges/adjacent_view/)
- [view](/cpp/ranges/view/)
- [ranges::filter_viewviews::filter](/cpp/ranges/filter_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
