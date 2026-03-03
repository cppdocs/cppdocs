---
title: "std::ranges::views::iota, std::ranges::iota_view"
source_path: "cpp/ranges/iota_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range factory that generates a sequence of elements by repeatedly incrementing an initial value. Can be either bounded or unbounded (infinite).

## Declarations
```cpp
template< std::weakly_incrementable W,
std::semiregular Bound = std::unreachable_sentinel_t >
requires /*weakly-equality-comparable-with*/<W, Bound> && std::copyable<W>
class iota_view
: public ranges::view_interface<iota_view<W, Bound>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ iota = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class W >
requires /* see below */
constexpr /* see below */ iota( W&& value );
```
_(since C++20)_

```cpp
template< class W, class Bound >
requires /* see below */
constexpr /* see below */ iota( W&& value, Bound&& bound );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
struct Bound
{
    int bound;
    bool operator==(int x) const { return x == bound; }
};
 
int main()
{
    for (int i : std::ranges::iota_view{1, 10})
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (int i : std::views::iota(1, 10))
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (int i : std::views::iota(1, Bound{10}))
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (int i : std::views::iota(1) | std::views::take(9))
        std::cout << i << ' ';
    std::cout << '\n';
 
    std::ranges::for_each(std::views::iota(1, 10),
                          [](int i){ std::cout << i << ' '; });
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4096 | C++20 | views::iota could copy an iota_view as-is | forbidden |
| P2325R3 | C++20 | iota_view required that W is semiregularas view required default_initializable | only requires that W is copyable |

## See also
- [iota](/cpp/algorithm/iota/)
- [ranges::iota](/cpp/algorithm/ranges/iota/)
- [ranges::repeat_viewviews::repeat](/cpp/ranges/repeat_view/)
- [view](/cpp/ranges/view/)
