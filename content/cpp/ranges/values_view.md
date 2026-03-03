---
title: "std::ranges::views::values, std::ranges::values_view"
source_path: "cpp/ranges/values_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Takes a [view](/cpp/ranges/view/) of tuple-like values (e.g. [std::tuple](/cpp/utility/tuple/) or [std::pair](/cpp/utility/pair/)), and produces a view with a value-type of the second element of the adapted view's value-type.

## Declarations
```cpp
template< class R >
using values_view = ranges::elements_view<R, 1>;
```
_(since C++20)_

```cpp
namespace views {
inline constexpr auto values = ranges::elements<1>;
}
```
_(since C++20)_

## Notes
values_view can be useful for extracting values from associative containers, e.g.

## Example
```cpp
#include <iostream>
#include <map>
#include <ranges>
 
int main()
{
    const auto list = {std::pair{1, 11.1}, {2, 22.2}, {3, 33.3}};
    std::cout << "pair::second values in the list: ";
    for (double value : list | std::views::values)
        std::cout << value << ' ';
 
    std::map<char, int> map{{'A', 1}, {'B', 2}, {'C', 3}, {'D', 4}, {'E', 5}};
    auto odd = [](int x) { return 0 != (x & 1); };
    std::cout << "\nodd values in the map: ";
    for (int value : map | std::views::values | std::views::filter(odd))
        std::cout << value << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3563 | C++20 | keys_view is unable to participate in CTAD due to its use of views::all_t | views::all_t removed |

## See also
- [ranges::keys_viewviews::keys](/cpp/ranges/keys_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [tuple-like](/cpp/utility/tuple/tuple-like/)
- [view](/cpp/ranges/view/)
- [slice](/cpp/numeric/valarray/slice/)
