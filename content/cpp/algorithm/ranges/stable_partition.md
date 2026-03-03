---
title: "std::ranges::stable_partition"
source_path: "cpp/algorithm/ranges/stable_partition"
header: "<algorithm>"
category: "algorithm"
---

1) Reorders the elements in the range [first,last) in such a way that the projection proj of all elements for which the predicate pred returns true precede the projection proj of elements for which predicate pred returns false. The algorithms is stable, i.e. the relative order of elements is preserved.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::permutable<I>
ranges::subrange<I>
stable_partition( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< ranges::bidirectional_range R, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::permutable<ranges::iterator_t<R>>
ranges::borrowed_subrange_t<R>
stable_partition( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first, last`: the range of elements to reorder
- `r`: the range of elements to reorder
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
This function attempts to allocate a temporary buffer. If the allocation fails, the less efficient algorithm is chosen.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
namespace rng = std::ranges;
 
template<std::permutable I, std::sentinel_for<I> S>
constexpr void stable_sort(I first, S last)
{
    if (first == last)
        return;
 
    auto pivot = *rng::next(first, rng::distance(first, last) / 2, last);
    auto left = [pivot](const auto& em) { return em < pivot; };
    auto tail1 = rng::stable_partition(first, last, left);
    auto right = [pivot](const auto& em) { return !(pivot < em); };
    auto tail2 = rng::stable_partition(tail1, right);
 
    stable_sort(first, tail1.begin());
    stable_sort(tail2.begin(), tail2.end());
}
 
void print(const auto rem, auto first, auto last, bool end = true)
{
    std::cout << rem;
    for (; first != last; ++first)
        std::cout << *first << ' ';
    std::cout << (end ? "\n" : "");
}
 
int main()
{
    const auto original = {9, 6, 5, 2, 3, 1, 7, 8};
 
    std::vector<int> vi {};
    auto even = [](int x) { return 0 == (x % 2); };
 
    print("Original vector:\t", original.begin(), original.end(), "\n");
 
    vi = original;
    const auto ret1 = rng::stable_partition(vi, even);
    print("Stable partitioned:\t", vi.begin(), ret1.begin(), 0);
    print("│ ", ret1.begin(), ret1.end());
 
    vi = original;
    const auto ret2 = rng::partition(vi, even);
    print("Partitioned:\t\t", vi.begin(), ret2.begin(), 0);
    print("│ ", ret2.begin(), ret2.end());
 
 
    vi = {16, 30, 44, 30, 15, 24, 10, 18, 12, 35};
    print("Unsorted vector: ", vi.begin(), vi.end());
 
    stable_sort(rng::begin(vi), rng::end(vi));
    print("Sorted vector:   ", vi.begin(), vi.end());
}
```

## See also
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::partition_copy](/cpp/algorithm/ranges/partition_copy/)
- [ranges::is_partitioned](/cpp/algorithm/ranges/is_partitioned/)
- [stable_partition](/cpp/algorithm/stable_partition/)
