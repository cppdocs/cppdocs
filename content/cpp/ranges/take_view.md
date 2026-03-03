---
title: "std::ranges::views::take, std::ranges::take_view"
source_path: "cpp/ranges/take_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) of the elements from an underlying sequence, starting at the beginning and ending at a given bound.

## Declarations
```cpp
template< ranges::view V >
class take_view
: public ranges::view_interface<take_view<V>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ take = /* unspecified */;
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
take( R&& r, ranges::range_difference_t<R> count );
```
_(since C++20)_

```cpp
template< class DifferenceType >
constexpr /* range adaptor closure */ take( DifferenceType&& count );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
int main()
{
    namespace views = std::views;
    auto print = [](char x){ std::cout << x; };
 
    for (const char nums[]{'1', '2', '3'};
         int n : views::iota(0, 5))
    {
        std::cout << "take(" << n << "): ";
        // safely takes only upto min(n, nums.size()) elements:
        std::ranges::for_each(nums | views::take(n), print);
        std::cout << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3407 | C++20 | views::take sometimes failed toconstruct a sized random access range | the result type is adjusted sothat construction is always valid |
| LWG 3494 | C++20 | take_view was never a borrowed_range | it is a borrowed_range if its underlying view is |

## See also
- [views::counted](/cpp/ranges/counted_view/)
- [ranges::take_while_viewviews::take_while](/cpp/ranges/take_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
