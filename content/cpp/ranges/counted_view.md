---
title: "std::ranges::views::counted"
source_path: "cpp/ranges/counted_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

A counted view presents a [view](/cpp/ranges/view/) of the elements of the counted range [i,n) for some iterator i and non-negative integer n.

## Declarations
```cpp
inline constexpr /*unspecified*/ counted = /*unspecified*/;
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class Iterator, class DifferenceType >
requires /* see below */
constexpr /*span-or-subrange*/ counted( Iterator&& it, DifferenceType&& count );
```
_(since C++20)_

## Notes
[views::counted](#top) does not check if the range is long enough to provide all count elements: use [views::take](/cpp/ranges/take_view/) if that check is necessary.

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    const int a[]{1, 2, 3, 4, 5, 6, 7};
    for (int i : std::views::counted(a, 3))
        std::cout << i << ' ';
    std::cout << '\n';
 
    const auto il = {1, 2, 3, 4, 5};
    for (int i : std::views::counted(il.begin() + 1, 3))
        std::cout << i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2393R1 | C++20 | implicit conversion from an integer-class type to std::size_t might be invalid | made explicit |

## See also
- [ranges::take_viewviews::take](/cpp/ranges/take_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::subrange](/cpp/ranges/subrange/)
- [view](/cpp/ranges/view/)
- [counted_iterator](/cpp/iterator/counted_iterator/)
- [ranges::countranges::count_if](/cpp/algorithm/ranges/count/)
