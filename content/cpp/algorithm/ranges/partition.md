---
title: "std::ranges::partition"
source_path: "cpp/algorithm/ranges/partition"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Reorders the elements in the range [first,last) in such a way that the projection proj of all elements for which the predicate pred returns true precede the projection proj of elements for which predicate pred returns false. Relative order of elements is not preserved.

## Declarations
```cpp
Call signature
```

```cpp
template< std::permutable I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr ranges::subrange<I>
partition( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
partition( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to reorder
- `r`: the range of elements to reorder
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
A subrange starting with an iterator to the first element of the second group and finishing with an iterator equal to last. (2) returns [std::ranges::dangling](/cpp/ranges/dangling/) if r is an rvalue of non-[borrowed_range](/cpp/ranges/borrowed_range/) type.

## Example
```cpp
#include <algorithm>
#include <forward_list>
#include <functional>
#include <iostream>
#include <iterator>
#include <ranges>
#include <vector>
 
namespace ranges = std::ranges;
 
template<class I, std::sentinel_for<I> S, class Cmp = ranges::less>
requires std::sortable<I, Cmp>
void quicksort(I first, S last, Cmp cmp = Cmp {})
{
    using reference = std::iter_reference_t<I>;
 
    if (first == last)
        return;
 
    auto size = ranges::distance(first, last);
    auto pivot = ranges::next(first, size - 1);
    ranges::iter_swap(pivot, ranges::next(first, size / 2));
 
    auto tail = ranges::partition(first, pivot, [=](reference em)
    {
        return std::invoke(cmp, em, *pivot); // em < pivot
    });
 
    ranges::iter_swap(pivot, tail.begin());
    quicksort(first, tail.begin(), std::ref(cmp));
    quicksort(ranges::next(tail.begin()), last, std::ref(cmp));
}
 
int main()
{
    std::ostream_iterator<int> cout {std::cout, " "};
 
    std::vector<int> v {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::cout << "Original vector:  \t";
    ranges::copy(v, cout);
 
    auto tail = ranges::partition(v, [](int i) { return i % 2 == 0; });
 
    std::cout << "\nPartitioned vector: \t";
    ranges::copy(ranges::begin(v), ranges::begin(tail), cout);
    std::cout << "│ ";
    ranges::copy(tail, cout);
 
    std::forward_list<int> fl {1, 30, -4, 3, 5, -4, 1, 6, -8, 2, -5, 64, 1, 92};
    std::cout << "\nUnsorted list: \t\t";
    ranges::copy(fl, cout);
 
    quicksort(ranges::begin(fl), ranges::end(fl), ranges::greater {});
    std::cout << "\nQuick-sorted list: \t";
    ranges::copy(fl, cout);
 
    std::cout << '\n';
}
```

## See also
- [ranges::partition_copy](/cpp/algorithm/ranges/partition_copy/)
- [ranges::is_partitioned](/cpp/algorithm/ranges/is_partitioned/)
- [ranges::stable_partition](/cpp/algorithm/ranges/stable_partition/)
- [partition](/cpp/algorithm/partition/)
