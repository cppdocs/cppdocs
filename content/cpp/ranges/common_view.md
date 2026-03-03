---
title: "std::ranges::views::common, std::ranges::common_view"
source_path: "cpp/ranges/common_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) Adapts a given [view](/cpp/ranges/view/) with different types for iterator/sentinel pair into a [view](/cpp/ranges/view/) that is also a [common_range](/cpp/ranges/common_range/). A common_view always has the same iterator/sentinel type.

## Declarations
```cpp
template< ranges::view V >
requires (not ranges::common_range<V> and
std::copyable<ranges::iterator_t<V>>)
class common_view
: public ranges::view_interface<common_view<V>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ common = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto common( R&& r );
```
_(since C++20)_

## Notes
common_view can be useful for working with legacy algorithms that expect the iterator and sentinel are of the same type.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <numeric>
#include <ranges>
 
int main()
{
    auto v1 = {1, 2, 3, 4, 5};
    auto i1 = std::counted_iterator{v1.begin(), std::ssize(v1)};
    auto r1 = std::ranges::subrange{i1, std::default_sentinel};
//  auto e1 = std::accumulate(r1.begin(), r1.end(), 0); // error: "common range" required
    auto c1 = std::ranges::common_view{r1};
    std::cout << "accumulate: " << std::accumulate(c1.begin(), c1.end(), 0) << '\n';
 
    // inherited from ranges::view_interface:
    std::cout << "c1.front(): " << c1.front() << '\n';
    std::cout << "c1.back(): " << c1.back() << '\n';
    std::cout << "c1.data(): " << c1.data() << '\n';
    std::cout << "c1[0]: " << c1[0] << '\n';
 
    auto v2 = std::list{1, 2, 3, 4, 5};
    auto i2 = std::counted_iterator{v2.begin(), std::ssize(v2)};
    auto r2 = std::ranges::subrange{i2, std::default_sentinel};
//  auto e2 = std::accumulate(r2.begin(), r2.end(), 0); // error: "common range" required
    auto c2 = std::ranges::common_view{ r2 };
    std::cout << "accumulate: " << std::accumulate(c2.begin(), c2.end(), 0) << '\n';
 
    // inherited from ranges::view_interface:
    std::cout << "c2.front(): " << c2.front() << '\n';
//  auto e3 = c2.back(); // error: "bidirectional range" required
//  auto e4 = c2.data(); // error: "contiguous range" required
//  auto e5 = c2[0];     // error: "random access range" required
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3494 | C++20 | common_view was never a borrowed_range | it is a borrowed_range if its underlying view is |

## See also
- [ranges::common_range](/cpp/ranges/common_range/)
- [common_iterator](/cpp/iterator/common_iterator/)
