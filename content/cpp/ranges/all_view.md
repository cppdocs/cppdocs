---
title: "std::ranges::views::all, std::ranges::views::all_t"
source_path: "cpp/ranges/all_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A [RangeAdaptorObject](/cpp/named_req/rangeadaptorobject/) (also a [RangeAdaptorClosureObject](/cpp/named_req/rangeadaptorclosureobject/)) that returns a [view](/cpp/ranges/view/) that includes all elements of its [range](/cpp/ranges/range/) argument.

## Declarations
```cpp
inline constexpr /* unspecified */ all = /* unspecified */;
```
_(since C++20)_

```cpp
template< ranges::viewable_range R >
using all_t = decltype(views::all(std::declval<R>()));
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
#include <type_traits>
#include <vector>
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4, 5};
    for (int n : std::views::all(v) | std::views::take(2))
        std::cout << n << ' ';
    std::cout << '\n';
 
    static_assert(std::is_same<
        decltype(std::views::single(42)),
        std::ranges::single_view<int>
        >{});
 
    static_assert(std::is_same<
        decltype(std::views::all(v)),
        std::ranges::ref_view<std::vector<int, std::allocator<int>>>
        >{});
 
    int a[]{1, 2, 3, 4};
    static_assert(std::is_same<
        decltype(std::views::all(a)),
        std::ranges::ref_view<int[4]>
        >{});
 
    static_assert(std::is_same<
        decltype(std::ranges::subrange{std::begin(a) + 1, std::end(a) - 1}),
        std::ranges::subrange<int*, int*, std::ranges::subrange_kind(1)>
        >{});
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3724 | C++20 | views::all might result in hard error for some move-only views | it gets well-constrained |
| P2415R2 | C++20 | views::all returned a subrange for a non-view rvalue range | returns an owning_view for it |

## See also
- [ranges::empty_viewviews::empty](/cpp/ranges/empty_view/)
- [view](/cpp/ranges/view/)
- [ranges::single_viewviews::single](/cpp/ranges/single_view/)
- [view](/cpp/ranges/view/)
- [ranges::owning_view](/cpp/ranges/owning_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
