---
title: "std::ranges::views::drop, std::ranges::drop_view"
source_path: "cpp/ranges/drop_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor consisting of elements of the underlying sequence, skipping the first N elements.

## Declarations
```cpp
template< ranges::view V >
class drop_view
: public ranges::view_interface<drop_view<V>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ drop = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto
drop( R&& r, ranges::range_difference_t<R> count );
```
_(since C++20)_

```cpp
template< class DifferenceType >
constexpr /* range adaptor closure */ drop( DifferenceType&& count );
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    const auto nums = {1, 2, 3, 4, 5, 6, 7};
 
    std::cout << "drop " << 2 << ": ";
    for (int i : std::ranges::drop_view{nums, 2})
        std::cout << i << ' ';
    std::cout << '\n';
 
    std::cout << "drop " << 3 << ": ";
    for (int i : nums | std::views::drop(3))
        std::cout << i << ' ';
    std::cout << '\n';
 
    std::cout << "drop " << 4 << ": ";
    for (int i : std::views::iota(1, 8) | std::views::drop(4))
        std::cout << i << ' ';
    std::cout << '\n';
 
    // Note that dropping more than the number of elements is OK:
    for (int dp : {5, 6, 7, 890, 100500})
    {
        std::cout << "drop " << dp << ": ";
        for (int i : std::views::iota(1, 8) | std::views::drop(dp))
            std::cout << i << ' ';
        std::cout << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3407 | C++20 | views::drop sometimes fails toconstruct a sized random access range | the construction is adjustedso that it is always valid |
| LWG 3494 | C++20 | drop_view was never a borrowed_range | it is a borrowed_range if its underlying view is |

## See also
- [ranges::drop_while_viewviews::drop_while](/cpp/ranges/drop_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
