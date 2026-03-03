---
title: "std::ranges::unique"
source_path: "cpp/algorithm/ranges/unique"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Eliminates all except the first element from every consecutive group of equivalent elements from the range [first,last) and returns a subrange [ret,last), where ret is a past-the-end iterator for the new end of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::permutable I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_equivalence_relation<std::projected<I, Proj>>
C = ranges::equal_to >
constexpr ranges::subrange<I>
unique( I first, S last, C comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_equivalence_relation<std::projected<ranges::iterator_t<R>, Proj>>
C = ranges::equal_to >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
unique( R&& r, C comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to process
- `r`: the range of elements to process
- `comp`: the binary predicate to compare the projected elements
- `proj`: the projection to apply to the elements

## Return value
Returns {ret, last}, where ret is a past-the-end iterator for the new end of the range.

## Notes
Removing is done by shifting (by means of move assignment) the elements in the range in such a way that the elements that are not to be removed appear in the beginning of the range. Relative order of the elements that remain is preserved and the physical size of the container is unchanged. Iterators in [ret,last) (if any) are still dereferenceable, but the elements themselves have unspecified values (as per [MoveAssignable](/cpp/named_req/moveassignable/) post-condition).

A call to ranges::unique is sometimes followed by a call to a container’s erase member function, which erases the unspecified values and reduces the physical size of the container to match its new logical size. These two invocations together model the [Erase–remove idiom](https://en.wikipedia.org/wiki/Erase-remove_idiom).

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <complex>
#include <iostream>
#include <vector>
 
struct id {
    int i;
    explicit id(int i) : i {i} {}
};
 
void print(id i, const auto& v)
{
    std::cout << i.i << ") ";
    std::ranges::for_each(v, [](auto const& e) { std::cout << e << ' '; });
    std::cout << '\n';
}
 
int main()
{
    // a vector containing several duplicated elements
    std::vector<int> v {1, 2, 1, 1, 3, 3, 3, 4, 5, 4};
 
    print(id {1}, v);
 
    // remove consecutive (adjacent) duplicates
    const auto ret = std::ranges::unique(v);
    // v now holds {1 2 1 3 4 5 4 x x x}, where 'x' is indeterminate
    v.erase(ret.begin(), ret.end());
    print(id {2}, v);
 
    // sort followed by unique, to remove all duplicates
    std::ranges::sort(v); // {1 1 2 3 4 4 5}
    print(id {3}, v);
 
    const auto [first, last] = std::ranges::unique(v.begin(), v.end());
    // v now holds {1 2 3 4 5 x x}, where 'x' is indeterminate
    v.erase(first, last);
    print(id {4}, v);
 
    // unique with custom comparison and projection
    std::vector<std::complex<int>> vc { {1, 1}, {-1, 2}, {-2, 3}, {2, 4}, {-3, 5} };
    print(id {5}, vc);
 
    const auto ret2 = std::ranges::unique(vc,
        // consider two complex nums equal if their real parts are equal by module:
        [](int x, int y) { return std::abs(x) == std::abs(y); }, // comp
        [](std::complex<int> z) { return z.real(); }             // proj
    );
    vc.erase(ret2.begin(), ret2.end());
    print(id {6}, vc);
}
```

## See also
- [ranges::unique_copy](/cpp/algorithm/ranges/unique_copy/)
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
- [unique](/cpp/algorithm/unique/)
- [unique](/cpp/container/list/unique/)
- [unique](/cpp/container/forward_list/unique/)
