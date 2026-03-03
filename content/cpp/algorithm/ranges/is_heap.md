---
title: "std::ranges::is_heap"
source_path: "cpp/algorithm/ranges/is_heap"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Checks whether the specified range represents a [heap](/cpp/algorithm/#Heap_operations) with respect to comp and proj.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_strict_weak_order
<std::projected<I, Proj>> Comp = ranges::less >
constexpr bool is_heap( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R, class Proj = std::identity,
std::indirect_strict_weak_order
<std::projected
<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr bool is_heap( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the iterator and sentinel designating the range of elements to examine
- `r`: the range of elements to examine
- `comp`: comparator to apply to the projected elements
- `proj`: projection to apply to the elements

## Example
```cpp
#include <algorithm>
#include <bit>
#include <cmath>
#include <iostream>
#include <vector>
 
void out(const auto& what, int n = 1)
{
    while (n-- > 0)
        std::cout << what;
}
 
void draw_heap(const auto& v)
{
    auto bails = [](int n, int w)
    {
        auto b = [](int w) { out("┌"), out("─", w), out("┴"), out("─", w), out("┐"); };
        n /= 2;
        if (!n)
            return;
        for (out(' ', w); n-- > 0;)
            b(w), out(' ', w + w + 1);
        out('\n');
    };
 
    auto data = [](int n, int w, auto& first, auto last)
    {
        for (out(' ', w); n-- > 0 && first != last; ++first)
            out(*first), out(' ', w + w + 1);
        out('\n');
    };
 
    auto tier = [&](int t, int m, auto& first, auto last)
    {
        const int n{1 << t};
        const int w{(1 << (m - t - 1)) - 1};
        bails(n, w), data(n, w, first, last);
    };
 
    const int m{static_cast<int>(std::ceil(std::log2(1 + v.size())))};
    auto first{v.cbegin()};
    for (int i{}; i != m; ++i)
        tier(i, m, first, v.cend());
}
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8};
 
    out("initially, v:\n");
    for (auto i : v)
        std::cout << i << ' ';
    out('\n');
 
    if (!std::ranges::is_heap(v))
    {
        out("making heap...\n");
        std::ranges::make_heap(v);
    }
 
    out("after make_heap, v:\n");
    for (auto t{1U}; auto i : v)
        std::cout << i << (std::has_single_bit(++t) ? " │ " : " ");
 
    out("\n" "corresponding binary tree is:\n");
    draw_heap(v);
}
```

## See also
- [ranges::is_heap_until](/cpp/algorithm/ranges/is_heap_until/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [is_heap](/cpp/algorithm/is_heap/)
