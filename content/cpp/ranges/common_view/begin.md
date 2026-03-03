---
title: "std::ranges::common_view<V>::begin"
source_path: "cpp/ranges/common_view/begin"
category: "ranges"
since: "C++20"
---

1) Returns an iterator to the first element of the common_view, that is:
[ranges::begin](/cpp/ranges/begin/)(base_), if both [ranges::random_access_range](/cpp/ranges/random_access_range/)<V> and [ranges::sized_range](/cpp/ranges/sized_range/)<V> are satisfied,[std::common_iterator](/cpp/iterator/common_iterator/)<[ranges::iterator_t](/cpp/ranges/iterator_t/)<V>, [ranges::sentinel_t](/cpp/ranges/iterator_t/)<V>>([ranges::begin](/cpp/ranges/begin/)(base_)) otherwise.
Here base_ (the name is for exposition only purposes) is the underlying view.

## Declarations
```cpp
constexpr auto begin() requires (!__simple_view<V>);
```
_(since C++20)_

```cpp
constexpr auto begin() const requires range<const V>;
```
_(since C++20)_

## Return value
An iterator to the beginning of the underlying view.

## Example
```cpp
#include <iostream>
#include <numeric>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr auto common = std::views::iota(1)
                          | std::views::take(3)
                          | std::views::common
                          ;
 
    for (int i{}; int e : common)
        std::cout << (i++ ? " + " : "") << e;
 
    std::cout << " = " << std::accumulate(common.begin(), common.end(), 0) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4012 | C++20 | non-const overload missed simple-view check | added |

## See also
- [end](/cpp/ranges/common_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
