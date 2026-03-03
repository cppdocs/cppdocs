---
title: "std::ranges::push_heap"
source_path: "cpp/algorithm/ranges/push_heap"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Inserts the last element in the specified range into a [heap](/cpp/algorithm/#Heap_operations) with respect to comp and proj, where the heap consists of all elements in the range except the last. The heap after the insertion will be the entire range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I push_heap( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
push_heap( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the iterator and sentinel designating the range of elements to modify
- `r`: the range of elements to modify
- `comp`: comparator to apply to the projected elements
- `proj`: projection to apply to the elements

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
 
void out(const auto& what, int n = 1)
{
    while (n-- > 0)
        std::cout << what;
}
 
void print(auto rem, auto const& v)
{
    out(rem);
    for (auto e : v)
        out(e), out(' ');
    out('\n');
}
 
void draw_heap(auto const& v)
{
    auto bails = [](int n, int w)
    {
        auto b = [](int w) { out("┌"), out("─", w), out("┴"), out("─", w), out("┐"); };
        if (!(n /= 2))
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
    std::vector<int> v{1, 6, 1, 8, 0, 3,};
    print("source vector v: ", v);
 
    std::ranges::make_heap(v);
    print("after make_heap: ", v);
    draw_heap(v);
 
    v.push_back(9);
 
    print("before push_heap: ", v);
    draw_heap(v);
 
    std::ranges::push_heap(v);
    print("after push_heap: ", v);
    draw_heap(v);
}
```

## See also
- [ranges::is_heap](/cpp/algorithm/ranges/is_heap/)
- [ranges::is_heap_until](/cpp/algorithm/ranges/is_heap_until/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [push_heap](/cpp/algorithm/push_heap/)
