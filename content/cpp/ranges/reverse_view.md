---
title: "std::ranges::views::reverse, std::ranges::reverse_view"
source_path: "cpp/ranges/reverse_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents a view of underlying [view](/cpp/ranges/view/) with reversed order.

## Declarations
```cpp
template< ranges::view V >
requires ranges::bidirectional_range<V>
class reverse_view
: public ranges::view_interface<reverse_view<V>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ reverse = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto reverse( R&& r );
```
_(since C++20)_

## Parameters
- `r`: range to reverse

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    static constexpr auto il = {3, 1, 4, 1, 5, 9};
 
    std::ranges::reverse_view rv{il};
    for (int i : rv)
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (int i : il | std::views::reverse)
        std::cout << i << ' ';
    std::cout << '\n';
 
    // operator[] is inherited from std::view_interface
    for (auto i{0U}; i != rv.size(); ++i)
        std::cout << rv[i] << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3494 | C++20 | reverse_view was never a borrowed_range | it is a borrowed_range if its underlying view is |

## See also
- [reverse_iterator](/cpp/iterator/reverse_iterator/)
- [ranges::reverse](/cpp/algorithm/ranges/reverse/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
