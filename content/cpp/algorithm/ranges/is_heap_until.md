---
title: "std::ranges::is_heap_until"
source_path: "cpp/algorithm/ranges/is_heap_until"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Within the specified range, finds the longest range which starting from the beginning of the specified range and represents a [heap](/cpp/algorithm/#Heap_operations) with respect to comp and proj.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_strict_weak_order
< std::projected<I, Proj>> Comp = ranges::less >
constexpr I is_heap_until( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R, class Proj = std::identity,
std::indirect_strict_weak_order
<std::projected
<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
is_heap_until( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
The last iterator iter in the specified range for which:

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <iterator>
#include <vector>
 
void out(const auto& what, int n = 1)
{
    while (n-- > 0)
        std::cout << what;
}
 
void draw_bin_tree(auto first, auto last)
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
 
    const auto size{std::ranges::distance(first, last)};
    const int m{static_cast<int>(std::ceil(std::log2(1 + size)))};
    for (int i{}; i != m; ++i)
        tier(i, m, first, last);
}
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9};
    std::ranges::make_heap(v);
 
    // probably mess up the heap
    v.push_back(2);
    v.push_back(6);
 
    out("v after make_heap and push_back:\n");
    draw_bin_tree(v.begin(), v.end());
 
    out("the max-heap prefix of v:\n");
    const auto heap_end = std::ranges::is_heap_until(v);
    draw_bin_tree(v.begin(), heap_end);
}
```

## See also
- [ranges::is_heap](/cpp/algorithm/ranges/is_heap/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [is_heap_until](/cpp/algorithm/is_heap_until/)
