---
title: "std::ranges::take_view<V>::end"
source_path: "cpp/ranges/take_view/end"
category: "ranges"
since: "C++20"
---

Returns a sentinel or an iterator representing the end of the take_view. The end of the take_view is either one past the countth element in the underlying range, or the end of the underlying range if the latter has less than count elements.

## Declarations
```cpp
constexpr auto end() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto end() const requires ranges::range<const V>;
```
_(since C++20)_

## Return value
The result depends on the concepts satisfied by possibly const-qualified underlying view type Base, that is V for ([1](#Version_1)) or const V for ([2](#Version_2)).

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <ranges>
#include <type_traits>
namespace ranges = std::ranges;
namespace views = std::views;
 
int main()
{
    const auto list1 = {3, 1, 4, 1, 5};
    const auto seq1{list1 | views::take(4)};
    static_assert(ranges::sized_range<decltype(seq1)> and
                  ranges::random_access_range<decltype(seq1)> and
                  std::is_same_v<decltype(seq1.end()), decltype(list1.end())>);
    for (auto it = seq1.begin(); it != seq1.end(); ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
 
    std::list list2{2, 7, 1, 8, 2};
    const auto seq2{list2 | views::take(4)};
    static_assert(ranges::sized_range<decltype(seq2)> and
                  not ranges::random_access_range<decltype(seq2)> and
                  std::is_same_v<decltype(seq2.end()), std::default_sentinel_t>);
    for (auto it = seq2.begin(); it != std::default_sentinel; ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2393R1 | C++20 | implicit conversions between signed and unsigned integer-class types might fail | made explicit |

## See also
- [begin](/cpp/ranges/take_view/begin/)
- [counted_iterator](/cpp/iterator/counted_iterator/)
- [operator==](/cpp/ranges/take_view/sentinel/operator_cmp/)
- [take_view::begin](/cpp/ranges/take_view/begin/)
