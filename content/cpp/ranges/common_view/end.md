---
title: "std::ranges::common_view<V>::end"
source_path: "cpp/ranges/common_view/end"
category: "ranges"
since: "C++20"
---

1) Returns an iterator representing the end of the common_view, that is:
[ranges::begin](/cpp/ranges/begin/)(base_) + [ranges::distance](/cpp/iterator/ranges/distance/)(base_), if both [ranges::random_access_range](/cpp/ranges/random_access_range/)<V> and [ranges::sized_range](/cpp/ranges/sized_range/)<V> are satisfied,[std::common_iterator](/cpp/iterator/common_iterator/)<[ranges::iterator_t](/cpp/ranges/iterator_t/)<V>, [ranges::sentinel_t](/cpp/ranges/iterator_t/)<V>>([ranges::end](/cpp/ranges/end/)(base_)) otherwise.
Here base_ (the name is for exposition purposes only) is the underlying view.

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
An iterator representing the end of the underlying view.

## Example
```cpp
#include <iostream>
#include <numeric>
#include <ranges>
 
int main()
{
    constexpr int n{4};
 
    constexpr auto v1 = std::views::iota(1)
                      | std::views::take(n)
                      | std::views::common
                      ;
    constexpr auto v2 = std::views::iota(2)
                      | std::views::take(n)
                      ;
    const int product = std::inner_product(v1.begin(), v1.end(),
                                           v2.begin(),
                                           0);
    std::cout << product << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4012 | C++20 | non-const overload missed simple-view check | added |

## See also
- [begin](/cpp/ranges/common_view/begin/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
